import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeItemComponent } from  './recipe-item.component';

@Component({
  moduleId: module.id,
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
  directives: [RecipeItemComponent]
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('MOMO', 'Also known as dumpling',
    'https://upload.wikimedia.org/wikipedia/commons/3/36/Momo101.jpg', []),
    new Recipe('Taco', 'Popular Mexican disc!',
    'http://img1.cookinglight.timeinc.net/sites/default/files/styles/500xvariable/public/image/2012/05/1205p28-tacos-x.jpg?itok=_QZx6JPs', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
