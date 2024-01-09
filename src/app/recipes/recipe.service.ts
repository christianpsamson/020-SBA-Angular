import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pork Menudo',
      'A savory stew made with pork, liver, vegetables, and tomato-based sauce, offering a flavorful blend of sweet, salty, and tangy notes.',
      'https://www.kawalingpinoy.com/wp-content/uploads/2016/12/filipino-chicken-menudo-1.jpg',
      false
    ),
    new Recipe(
      'Caldereta',
      'A spicy meat stew, often with beef or goat, cooked in a rich tomato-based sauce with vegetables.',
      'https://urbanblisslife.com/wp-content/uploads/2022/01/filipino-beef-caldereta-FEATURE.jpg',
      false
    ),
    new Recipe(
      'Beef Nilaga',
      'A boiled soup with beef, corn, potatoes, and plantains, creating a comforting and hearty broth.',
      'https://panlasangpinoy.com/wp-content/uploads/2023/04/beef-nilaga-recipe-panlasang-pinoy.jpg',
      false
    ),
    new Recipe(
      'Beef Kare Kare',
      'An oxtail and tripe stew with peanut sauce, creating a rich and flavorful delicacy often served with shrimp-paste.',
      'https://panlasangpinoy.com/wp-content/uploads/2023/04/ox-tail-kare-kare.jpg',
      false
    ),
    new Recipe(
      'Beef with Mushroom',
      'Featuring tender beef slices cooked with mushrooms in a savory soy-based sauce, offering delicious umami flavors.',
      'https://scontent.fwbw1-1.fna.fbcdn.net/v/t1.6435-9/55611062_2060267580694302_7834224002368274432_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=tIu-rir1WFkAX8o-hRE&_nc_ht=scontent.fwbw1-1.fna&oh=00_AfBvv1D0bCrpTOZu7PrP6z5AYyN_S1t2nhKvVVNpWIBgHg&oe=65C3FFD3',
      false
    ),
    new Recipe(
      'Chicken Tinola',
      'A ginger-infused soup with tender chicken, green papaya, and chili leaves, creating a comforting and flavorful broth.',
      'https://www.foxyfolksy.com/wp-content/uploads/2015/08/tinola-recipe-1.jpg',
      false
    ),
    new Recipe(
      'Chicken Afritada',
      'A stew featuring tender chicken cooked in a savory tomato-based sauce with vegetables, creating a flavorful dish.',
      'https://www.deecuisine.com/wp-content/uploads/2021/04/deecuisine-chicken-afritada-recipe.jpg',
      false
    ),
  ];
  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Method to return shallow copy of recipes
  //////////////////////////////////////////////////////////////////////////////////////////////////
  getRecipes() {
    return this.recipes.slice();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////
  // Method to clear/deselect the background for all items
  //////////////////////////////////////////////////////////////////////////////////////////////////
  clearSelection() {
    this.recipes.forEach((recipe) => (recipe.isSelected = false));
  }
}
