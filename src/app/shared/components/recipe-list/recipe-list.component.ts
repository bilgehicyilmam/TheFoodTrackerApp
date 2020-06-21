import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
/**
 * Table for reservation list
 */
export class RecipeListComponent implements OnInit {
  /**
   * Reservation list to be listed on table
   */

  public sortField: string;
  public desc = true;

  @Input()
  set recipes(value: Recipe[]) {
    if (!value) {
      return;
    }
    const rows = [];
    for (let i = 0; i < value.length; i++) {
      const counter = Math.floor(i / 4);
      if (!rows[counter]) {
        rows[counter] = [];
      }
      rows[counter].push(value[i]);
    }
    this.recipeRows = rows;
    this.recipesArray = value;
  }

  public recipesArray: Recipe[];

  public recipeRows: Recipe[][];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Changes sorting field or sorting-order
   * @param field Sorting field
   */
  public sortBy(field: string): void {
    if (this.sortField === field) {
      this.desc = !this.desc;
    } else {
      this.sortField = field;
      this.desc = true;
    }
  }
}
