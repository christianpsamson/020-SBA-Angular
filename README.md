# Favorite Filipino Recipes

Filipino Favorites is a project dedicated to showcasing a delightful collection of Filipino dish recipes. Our repository is ever-expanding, with a commitment to providing a diverse selection of beloved Filipino culinary creations. Whether you're a seasoned cook or just starting in the kitchen, our collection is designed to cater to all skill levels.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## How to Use

1. Navigate to the Recipes section to explore our diverse collection.
2. Select a recipe of your choice to reveal complete details, including ingredients and instructions.
3. Grocery List (work in progress):
   Only adding items to the list is currently supported.

## Project Requirements

### Data Binding

The following are few of the components which utilized various data binding techniques. Data binding has been used atleast four times in this project.

1. recipe-detail.component.html:
   <p>&nbsp;</p>

property binding

```html
[src]="recipe.imagePath"
```

string interpolation

```html
<h1>{{ recipe.name }}</h1>
```

<p>&nbsp;</p>
2. recipe-item.component.html:
<p>&nbsp;</p>
property binding

```html
[src]="recipe.imagePath"
```

string interpolation

```html
<h4 class="list-group-item-heading">{{ recipe.name }}</h4>
<p class="list-group-item-text">{{ recipe.description }}</p>
```

### Directives Utilization

Various directives have been strategically employed accross different components to enhance the functionality and appearance of the application.

1. recipe-list.component.html:

```html
<ng-container *ngFor="let recipeEl of recipes; let last = last"></ng-container>
```

```html
<br *ngIf="!last" />
```

2. recipe-item.component.html:

```css
 [ngStyle]="{
    cursor: 'pointer',
    'background-color': recipe.isSelected ? '#ffa500' : 'inherit'
  }"
  [ngClass]="{ selectedItem: recipe.isSelected }"
```

### Angular Routing

The application includes two distint routes which render different views.

1. Recipes
2. Grocery List
