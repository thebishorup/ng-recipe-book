import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-details',
  templateUrl: 'recipe-details.component.html'
})
export class RecipeDetailsComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
