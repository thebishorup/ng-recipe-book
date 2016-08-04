import { Injectable } from '@angular/core';

import { Recipe } from  './recipe';
import { Ingredient } from '../shared';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('MOMO', 'Also known as dumpling',
    'https://upload.wikimedia.org/wikipedia/commons/3/36/Momo101.jpg', [
      new Ingredient('Ground Chicken', 1),
      new Ingredient('Crushed Tomato', 3)
    ]),
    new Recipe('Taco', 'Popular Mexican disc!',
    'http://img1.cookinglight.timeinc.net/sites/default/files/styles/500xvariable/public/image/2012/05/1205p28-tacos-x.jpg?itok=_QZx6JPs', [
      new Ingredient('Fried Onion', 4),
      new Ingredient('Jalapeno', 1)
    ])
  ];

  constructor() {}

  getRecipes() {
    return this.recipes;
  }

}
