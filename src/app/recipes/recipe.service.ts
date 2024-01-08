import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pork Menudo',
      'A Filipino dish with pork',
      'https://www.kawalingpinoy.com/wp-content/uploads/2016/12/filipino-chicken-menudo-1.jpg'
    ),
    new Recipe(
      'Caldereta',
      'A Filipino dish with beef',
      'https://urbanblisslife.com/wp-content/uploads/2022/01/filipino-beef-caldereta-FEATURE.jpg'
    ),
    new Recipe(
      'Beef Nilaga',
      'A Filipino dish with beef',
      'https://panlasangpinoy.com/wp-content/uploads/2023/04/beef-nilaga-recipe-panlasang-pinoy.jpg'
    ),
    new Recipe(
      'Beef Kare Kare',
      'A Filipino dish with beef',
      'https://panlasangpinoy.com/wp-content/uploads/2023/04/ox-tail-kare-kare.jpg'
    ),
  ];
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Method to return shallow copy of recipes
  //////////////////////////////////////////////////////////////////////////////////////////////////
  getRecipes() {
    return this.recipes.slice();
  }
}
