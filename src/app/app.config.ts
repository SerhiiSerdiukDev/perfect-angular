import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import {
  initializeAppCheck,
  ReCaptchaEnterpriseProvider,
  provideAppCheck,
} from '@angular/fire/app-check';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { environment } from '../environments/environment';

const firabaseApp = initializeApp({
  projectId: 'perfect-angular',
  appId: '***REMOVED***',
  storageBucket: 'perfect-angular.appspot.com',
  apiKey: '***REMOVED***',
  authDomain: 'perfect-angular.firebaseapp.com',
  messagingSenderId: '***REMOVED***',
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() => firabaseApp),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
    UserTrackingService,
    provideAppCheck(() => {
      const provider = new ReCaptchaEnterpriseProvider(
        environment.reCaptchaSiteKey
      );
      return initializeAppCheck(firabaseApp, {
        provider,
        isTokenAutoRefreshEnabled: true,
      });
    }),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
  ],
};
