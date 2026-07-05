import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { authInterceptor, provideSharedDataAccess } from '@fesleep-microfrontend-platform/shared-data-access';

import { routes } from './app.routes';
import { environment } from '../environments/environment';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

const httpLoaderFactory = (http: HttpClient) =>
  new TranslateHttpLoader(http, '/i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideSharedDataAccess({ apiBaseUrl: environment.apiBaseUrl }),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ]
};
