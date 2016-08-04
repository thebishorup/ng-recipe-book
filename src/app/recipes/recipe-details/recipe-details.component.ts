import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { ShoppinglistService } from '../../shopping-list/shoppinglist.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-details',
  templateUrl: 'recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private shoppingListService: ShoppinglistService) { 

  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  ngOnInit() {
  }

}
