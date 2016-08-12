import { RouterConfig } from '@angular/router';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';

export const RECIPE_ROUTES: RouterConfig = [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeDetailsComponent },
    { path: ':id/edit', component: RecipeEditComponent }
];
