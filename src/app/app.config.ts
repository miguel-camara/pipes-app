import { ApplicationConfig, ChangeDetectionStrategy, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { PreloadingStrategy, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { LocationStrategy, registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es';
import localeFr from '@angular/common/locales/fr';
import { LocaleService } from './services/locale.service';

registerLocaleData(localeEs, 'es');
registerLocaleData(localeFr, 'fr');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      useFactory: (localeService: LocaleService) => localeService.getLocale,
    }
    // provideZonelessChangeDetection( ChangeDetectionStrategy )
  ]
};
