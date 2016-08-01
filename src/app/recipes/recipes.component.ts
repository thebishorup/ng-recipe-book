import { Component, OnInit } from '@angular/core';
import { RecipeListComponent } from './recipe-list';
import { RecipeDetailsComponent } from './recipe-details';
import { Recipe } from './recipe';

@Component({
  moduleId: module.id,
  selector: 'rb-recipes',
  templateUrl: 'recipes.component.html',
  directives: [RecipeListComponent, RecipeDetailsComponent]
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
