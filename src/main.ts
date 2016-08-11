import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { ShoppinglistService } from './app/shopping-list/shoppinglist.service';
import { APP_ROUTES_PROVIDERS } from './app/app.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [APP_ROUTES_PROVIDERS, ShoppinglistService]);
