import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pork Menudo',
      'A savory stew made with pork, liver, vegetables, and tomato-based sauce, offering a flavorful blend of sweet, salty, and tangy notes.',
      'https://www.kawalingpinoy.com/wp-content/uploads/2016/12/filipino-chicken-menudo-1.jpg',
      false,
      [
        {
          name: '	pork (preferably a fatter cut such as Boston butt)	',
          quantity: '	2 lbs	',
        },
        { name: '	onion, chopped	', quantity: '	2 cups	' },
        { name: '	fresh tomato, chopped	', quantity: '	1 cup	' },
        { name: '	can tomato sauce	', quantity: '	1 15 oz	' },
        { name: '	garlic cloves, chopped	', quantity: '	6 large	' },
        { name: '	potato, skinned and cubed	', quantity: '	1 large	' },
        { name: '	carrot, cubed	', quantity: '	1 cup	' },
        { name: '	green bell pepper	', quantity: '	1 medium	' },
        { name: '	red bell pepper	', quantity: '	1 medium	' },
        { name: '	green peas	', quantity: '	1 cup	' },
        { name: '	garbanzo beans	', quantity: '	1 cup	' },
        { name: '	raisins	', quantity: '	1/3 cup	' },
        { name: '	lime or lemon juice	', quantity: '	1/2 fresh	' },
        { name: '	soy sauce, divided	', quantity: '	4 Tbsp	' },
        { name: '	fish sauce	', quantity: '	1.5 Tbsp	' },
        { name: '	brown sugar	', quantity: '	2 tsp	' },
        { name: '	bay leaves	', quantity: '	2 pcs	' },
      ],
      [
        {
          step: '	Marinate the pork with lemon/lime juice, soy sauce, bay leaves, salt and pepper for at least 30 minutes to couple of hours.	',
        },
        {
          step: '	Chop potatoes, carrots and bell peppers into cubes. Chop the onions and garlic.	',
        },
        {
          step: '	Heat oil over medium high heat in a dutch oven or stew pot. Add onion and sauté onion till translucent. Add in chopped garlic and give it a stir for 2 minutes. Add marinated pork along with its juices and combine and cook for 10 minutes till pork is no longer pink, about 5 minutes.	',
        },
        {
          step: '	Add in fish sauce and 1 cup of water. Cook for 10 minutes, covered. Stir in tomatoes and tomato sauce with enough water to cover the pork and cook covered for 30-40 minutes, stirring occasionally.	',
        },
        {
          step: '	Add in potato and carrot along with brown sugar. Again cover and cook for 15-20 minutes. If liquid is needed add half a cup of water.	',
        },
        {
          step: '	15 minutes before the stew is completely cooked, add in the bell peppers, peas, garbanzos and raisins.	',
        },
        { step: '	Taste and adjust for soy sauce .	' },
        { step: '	Cook till pork is fork tender.	' },
      ]
    ),
    new Recipe(
      'Caldereta',
      'A spicy meat stew, often with beef or goat, cooked in a rich tomato-based sauce with vegetables.',
      'https://urbanblisslife.com/wp-content/uploads/2022/01/filipino-beef-caldereta-FEATURE.jpg',
      false,
      [
        { name: '	beef cubed	', quantity: '	2 lbs	' },
        { name: '	garlic cloves crushed and chopped	', quantity: '	3 pieces	' },
        { name: '	onion finely chopped	', quantity: '	1 piece	' },
        { name: '	beef broth	', quantity: '	2 cups	' },
        { name: '	red bell pepper sliced	', quantity: '	1 piece	' },
        { name: '	green bell pepper sliced	', quantity: '	1 piece	' },
        { name: '	tomato sauce	', quantity: '	1 cup	' },
        { name: '	liver spread processed using blender	', quantity: '	½ cup	' },
        { name: '	chili flakes	', quantity: '	1 teaspoon	' },
        { name: '	dried bay leaves	', quantity: '	3 pieces	' },
        { name: '	potatoes sliced	', quantity: '	2 cups	' },
        { name: '	carrots sliced	', quantity: '	2 cups	' },
        { name: '	cooking oil	', quantity: '	1/4 cup	' },
        { name: '	green olives	', quantity: '	⅔ cup	' },
        { name: '	salt and pepper to taste	', quantity: '		' },
      ],
      [
        { step: '	Heat the cooking oil in the cooking pot or pressure cooker.	' },
        { step: '	Sauté the onion and garlic.	' },
        {
          step: '	Add the beef. Cook for 5 minutes or until the color turns light brown.	',
        },
        { step: '	Add the dried bay leaves and crushed pepper. Stir.	' },
        { step: '	Add the liver spread. Stir.	' },
        { step: '	Pour-in the tomato sauce and beef broth.	' },
        {
          step: '	Cook the beef until it becomes tender (about 30 mins if using a pressure cooker, or 1 to 2 hours if using an ordinary pot).	',
        },
        { step: '	Add potato and carrots. Cook for 8 to 10 minutes.	' },
        {
          step: '	Put the green olives and bell peppers in the cooking pot. Stir and continue to cook for 5 minutes more.	',
        },
        { step: '	Add salt and pepper to taste	' },
        { step: '	Serve Hot. Enjoy!	' },
      ]
    ),
    new Recipe(
      'Beef Nilaga',
      'A boiled soup with beef, corn, potatoes, and plantains, creating a comforting and hearty broth.',
      'https://panlasangpinoy.com/wp-content/uploads/2023/04/beef-nilaga-recipe-panlasang-pinoy.jpg',
      false,
      [
        { name: 'beef brisket cubed', quantity: '2 lbs' },
        { name: 'big potato cubed', quantity: '1' },
        { name: 'bok choy or pechay', quantity: '1' },
        { name: 'large onion chopped', quantity: '1' },
        {
          name: 'medium-sized carrots chopped crosswise (w/ length of about 2 inches)',
          quantity: '2',
        },
        { name: 'whole peppercorn', quantity: '1 tbsp' },
        { name: 'fish sauce (patis)', quantity: '3 tbsp' },
      ],
      [
        { step: 'Saute the onion until texture becomes soft' },
        { step: 'Add in the beef brisket and cook for about 5 minutes' },
        { step: 'Add the fish sauce and whole peppercorn then mix well' },
        {
          step: 'Pour in the water and bring to a boil. Simmer for 1 to 2 hours (or 30 minutes if using a pressure cooker)',
        },
        {
          step: 'Put in the vegetables starting with the potato and the carrots. Simmer for 5 to 7 minutes',
        },
        {
          step: 'Add the bok choy (Pechay). Cover the pot and turn off the heat. Let it stay for 5 minutes',
        },
        { step: 'Serve hot. Share and Enjoy!' },
      ]
    ),
    new Recipe(
      'Beef Kare Kare',
      'An oxtail and tripe stew with peanut sauce, creating a rich and flavorful delicacy often served with shrimp-paste.',
      'https://panlasangpinoy.com/wp-content/uploads/2023/04/ox-tail-kare-kare.jpg',
      false,
      [
        {
          name: 'oxtail cut in 2 inch slices (you can also use tripe or beef slices)',
          quantity: '3 lbs',
        },
        { name: 'small banana flower bud sliced', quantity: '1 piece' },
        { name: 'pechay or bok choy', quantity: '1 bundle' },
        { name: 'string beans cut into 2 inch slices', quantity: '1 bundle' },
        { name: 'eggplants sliced', quantity: '4 pieces' },
        { name: 'ground peanuts', quantity: '1 cup' },
        { name: 'peanut butter', quantity: '1/2 cup' },
        { name: 'shrimp paste', quantity: '1/2 cup' },
        { name: 'water (about 1 liter)', quantity: '34 ounces' },
        { name: 'annatto seeds soaked in a cup of water', quantity: '1/2 cup' },
        { name: 'toasted ground rice', quantity: '1/2 cup' },
        { name: 'garlic minced', quantity: '1 tbsp' },
        { name: 'onion chopped', quantity: '1 piece' },
        { name: 'salt and pepper', quantity: 'to taste' },
      ],
      [
        { step: 'In a large pot, bring the water to a boil' },
        {
          step: 'Put in the oxtail followed by the onions and simmer for 2.5 to 3 hrs or until tender (35 minutes if using a pressure cooker)',
        },
        {
          step: 'Once the meat is tender, add the ground peanuts, peanut butter, and coloring (water from the annatto seed mixture) and simmer for 5 to 7 minutes',
        },
        { step: 'Add the toasted ground rice and simmer for 5 minutes' },
        {
          step: 'On a separate pan, saute the garlic then add the banana flower, eggplant, and string beans and cook for 5 minutes',
        },
        {
          step: 'Transfer the cooked vegetables to the large pot (where the rest of the ingredients are)',
        },
        { step: 'Add salt and pepper to taste' },
        { step: 'Serve hot with shrimp paste. Enjoy!' },
      ]
    ),
    new Recipe(
      'Beef with Mushroom',
      'Featuring tender beef slices cooked with mushrooms in a savory soy-based sauce, offering delicious umami flavors.',
      'https://scontent.fwbw1-1.fna.fbcdn.net/v/t1.6435-9/55611062_2060267580694302_7834224002368274432_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=tIu-rir1WFkAX8o-hRE&_nc_ht=scontent.fwbw1-1.fna&oh=00_AfBvv1D0bCrpTOZu7PrP6z5AYyN_S1t2nhKvVVNpWIBgHg&oe=65C3FFD3',
      false,
      [
        { name: 'beef sirloin or chuck cut into cubes', quantity: '2 lbs' },
        { name: 'sea salt', quantity: '1 1/2 teaspoons' },
        { name: 'ground black pepper', quantity: '1/4 teaspoon' },
        { name: 'butter', quantity: '1/4 cup' },
        { name: 'chopped white mushrooms', quantity: '2 lbs' },
        { name: 'medium yellow onion, chopped', quantity: '1' },
        { name: 'cloves garlic, crushed', quantity: '5' },
        { name: 'tomato paste', quantity: '1/4 cup' },
        { name: 'cream of mushroom (10 oz. can)', quantity: '1' },
        { name: 'beef broth', quantity: '4 cups' },
        { name: 'dried parsley flakes', quantity: '2 teaspoons' },
        { name: 'dried oregano', quantity: '1/2 teaspoon' },
      ],
      [
        {
          step: 'Rub salt and ground black pepper on the beef. Let it stay for 10 minutes.',
        },
        {
          step: 'Melt 1 tablespoon butter in a Dutch oven or cooking pot. Put the beef in and cook for 3 to 5 minutes or until the color turns light brown.',
        },
        {
          step: 'Remove the beef. Set Aside. Melt the remaining butter in the same cooking pot.',
        },
        {
          step: 'Once the butter melts, saute the mushrooms, onions, and garlic. Continue to cook until the mushrooms become soft.',
        },
        { step: 'Add the beef. Cook for 2 minutes.' },
        {
          step: 'Add the tomato paste, parsley, oregano, and beef broth. Stir and let boil. Cover and simmer for 60 minutes.',
        },
        {
          step: 'Add the cream of mushroom. Stir and cook for 2 to 3 minutes.',
        },
        {
          step: 'Turn the heat off. Transfer to a serving plate. Share and enjoy!',
        },
      ]
    ),
    new Recipe(
      'Chicken Tinola',
      'A ginger-infused soup with tender chicken, green papaya, and chili leaves, creating a comforting and flavorful broth.',
      'https://www.foxyfolksy.com/wp-content/uploads/2015/08/tinola-recipe-1.jpg',
      false,
      [
        { name: 'whole chicken', quantity: '1, cut into serving pieces' },
        { name: 'rice washing', quantity: '36 ounces' },
        { name: 'green papaya', quantity: '1/2, cut into wedges' },
        { name: 'garlic', quantity: '1 tablespoon, minced' },
        { name: 'onion', quantity: '1, chopped' },
        { name: 'ginger', quantity: '1 thumb, cut into strips' },
        { name: 'fish sauce', quantity: '2 tablespoons' },
        { name: 'hot pepper leaves', quantity: '1 cup' },
        { name: 'fish sauce', quantity: '3 tablespoons' },
        { name: 'ground black pepper', quantity: '1/4 teaspoon' },
      ],
      [
        { step: 'Sauté the garlic, onion, and ginger.' },
        {
          step: 'Put-in the chicken and cook until the color turns light brown.',
        },
        {
          step: 'Add the fish sauce, stir, and then pour rice washing into the cooking pot. Let it boil.',
        },
        {
          step: 'Cover the pot and simmer for 45 minutes. Note: Add water if needed.',
        },
        { step: 'Add the green papaya and cook for an additional 5 minutes.' },
        {
          step: 'Add the hot pepper leaves or malunggay leaves. Stir and cook for 1 minute.',
        },
        {
          step: 'Season with ground black pepper. Note: You can also add fish sauce or salt if needed.',
        },
        { step: 'Transfer to a serving bowl.' },
        { step: 'Serve hot.' },
        { step: 'Share and enjoy!' },
      ]
    ),
    new Recipe(
      'Chicken Afritada',
      'A stew featuring tender chicken cooked in a savory tomato-based sauce with vegetables, creating a flavorful dish.',
      'https://www.deecuisine.com/wp-content/uploads/2021/04/deecuisine-chicken-afritada-recipe.jpg',
      false,
      [
        { name: 'chicken', quantity: '1 ½ lbs., cut into serving pieces' },
        { name: 'potato', quantity: '2 pieces, cubed' },
        { name: 'carrot', quantity: '1 piece, sliced' },
        { name: 'tomato sauce', quantity: '8 oz.' },
        { name: 'hotdog', quantity: '3 pieces, sliced' },
        { name: 'green peas', quantity: '½ cup' },
        { name: 'bay leaves', quantity: '3 pieces' },
        { name: 'red onion', quantity: '1 piece, chopped' },
        { name: 'garlic', quantity: '2 teaspoons, minced' },
        { name: 'chicken broth', quantity: '3 cups' },
        { name: 'sugar', quantity: '½ teaspoon' },
        { name: 'cooking oil', quantity: '3 tablespoons' },
        { name: 'salt', quantity: 'to taste' },
        { name: 'ground black pepper', quantity: 'to taste' },
      ],
      [
        {
          step: 'Heat the oil in a cooking pot. Sauté onion and garlic until the onion softens.',
        },
        {
          step: 'Add chicken. Cook for 30 seconds. Turn it over and cook the other side for another 30 seconds.',
        },
        { step: 'Pour tomato sauce and chicken broth. Cover. Let it boil.' },
        {
          step: 'Add dried bay leaves. Cover the cooking pot. Continue to cook over medium heat for 30 minutes.',
        },
        { step: 'Add hotdogs and carrot. Cook for 3 minutes.' },
        { step: 'Add potato. Cover the pot and cook for 8 minutes.' },
        { step: 'Add green peas. Cook for 2 minutes.' },
        { step: 'Season with salt and ground black pepper.' },
        { step: 'Serve!' },
      ]
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
