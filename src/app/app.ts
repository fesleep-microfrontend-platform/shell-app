import { Component, inject, signal } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { UiButtonComponent, UiStackComponent } from '@fesleep-microfrontend-platform/ui-design-system';

const THEME_STORAGE_KEY = 'theme';
const LOCALE_STORAGE_KEY = 'locale';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, UiButtonComponent, UiStackComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('shell-app');
  protected readonly theme = signal<'light' | 'dark'>('light');
  protected readonly router = inject(Router);
  private readonly translate = inject(TranslateService);

  protected isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '';
  }

  constructor() {
    this.initTheme();
    this.initLocale();
  }

  navigateToContact(): void {
    this.router.navigate(['/contact']);
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  changeLanguage(): void {
    const next = this.translate.currentLang === 'pt' ? 'en' : 'pt';
    this.translate.use(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }

  private initLocale(): void {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as 'en' | 'pt' | null;
    if (stored === 'en' || stored === 'pt') {
      this.translate.use(stored);
    }
  }

  changeTheme(): void {
    const next = this.theme() === 'light' ? 'dark' : 'light';
    this.applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
  }

  private initTheme(): void {
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as 'light' | 'dark' | null;
    if (stored === 'light' || stored === 'dark') {
      this.applyTheme(stored);
      return;
    }
    const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = prefersDark ? 'dark' : 'light';
    this.applyTheme(initial);
    localStorage.setItem(THEME_STORAGE_KEY, initial);
  }

  private applyTheme(theme: 'light' | 'dark'): void {
    this.theme.set(theme);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }
}
