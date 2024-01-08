import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
  encapsulation: ViewEncapsulation.Emulated,
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Menudo',
      'A Filipino dish with pork',
      'https://www.kawalingpinoy.com/wp-content/uploads/2016/12/filipino-chicken-menudo-1.jpg'
    ),
    new Recipe(
      'Caldereta',
      'A Filipino dish with beef',
      'https://urbanblisslife.com/wp-content/uploads/2022/01/filipino-beef-caldereta-FEATURE.jpg'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
