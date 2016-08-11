import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/RX';

import { Recipe } from '../recipe';
import { ShoppinglistService } from '../../shopping-list/shoppinglist.service';
import { RecipeService } from '../recipe.service';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-details',
  templateUrl: 'recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {

  selectedRecipe: Recipe;
  private recipeIndex: number;
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppinglistService,
              private router: Router,
              private route: ActivatedRoute,
              private resipeService: RecipeService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.resipeService.getRecipe(this.recipeIndex);
      }
    );
  }

  onAddToShoppingList() {
    this.shoppingListService.addItems(this.selectedRecipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.resipeService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }

}
