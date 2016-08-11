import { RouterConfig } from '@angular/router';
import { RecipeStartComponent } from './recipe-start.component';
import { RecipeEditComponent } from './recipe-edit';

export const RECIPE_ROUTES: RouterConfig = [
    { path: '', component: RecipeStartComponent },
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipeStartComponent },
    { path: ':id/edit', component: RecipeEditComponent }
];
