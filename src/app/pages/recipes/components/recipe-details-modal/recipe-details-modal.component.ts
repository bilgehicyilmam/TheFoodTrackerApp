import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../../../shared/models/recipe';

@Component({
  selector: 'app-recipe-details-modal',
  templateUrl: './recipe-details-modal.component.html',
  styleUrls: ['./recipe-details-modal.component.scss']
})
export class RecipeDetailsModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() recipeDetails: Recipe;

  @Output() closed = new EventEmitter<void>();

  public objectKeys = Object.keys;

  constructor() {
  }

  ngOnInit(): void {
  }

}
