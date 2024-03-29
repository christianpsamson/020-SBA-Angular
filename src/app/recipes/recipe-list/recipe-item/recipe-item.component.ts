import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onSelected() {
    this.recipeSelected.emit();
    this.recipeService.clearSelection();
    this.recipe.isSelected = !this.recipe.isSelected;
  }
}
