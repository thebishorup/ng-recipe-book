import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { ShoppinglistService } from './app/shopping-list/shoppinglist.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ShoppinglistService]);
