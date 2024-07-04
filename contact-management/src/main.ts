import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const appConfigWithProviders = {
  ...appConfig,
  providers: [
    ...appConfig.providers,
    provideRouter(routes),
    importProvidersFrom(HttpClientModule, ReactiveFormsModule, HttpClient)
  ]
};

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
