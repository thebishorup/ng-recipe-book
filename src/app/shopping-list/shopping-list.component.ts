import { Component, OnInit } from '@angular/core';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { Ingredient } from '../shared';

import { ShoppinglistService } from './shoppinglist.service';

@Component({
  moduleId: module.id,
  selector: 'rb-shopping-list',
  templateUrl: 'shopping-list.component.html',
  directives: [ShoppingListAddComponent]
})
export class ShoppingListComponent implements OnInit {

  selectedItem: Ingredient = null;
  items: Ingredient[] = [];

  constructor(private shoppingListService: ShoppinglistService) { }

  ngOnInit() {
    this.items = this.shoppingListService.getItems();
  }

  onSelectItem(item: Ingredient) {
    this.selectedItem = item;
  }

  onCleared() {
    this.selectedItem = null;
  }

}
