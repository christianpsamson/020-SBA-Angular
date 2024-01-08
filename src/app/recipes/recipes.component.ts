import { Component, ViewEncapsulation } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class RecipesComponent {
  selectedRecipe: Recipe;

  constructor() {}

  ngOnInit() {}
}
