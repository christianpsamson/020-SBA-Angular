import { Ingredient } from './recipe-ingredient.model';
import { Steps } from './recipe-steps.model';

export class Recipe {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public isSelected: boolean,
    public ingredients: Ingredient[],
    public steps: Steps[]
  ) {}
}
