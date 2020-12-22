import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
document.body.classList.toggle('dark', prefersDark.matches);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
