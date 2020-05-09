import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-filter',
  templateUrl: './recipe-filter.component.html',
  styleUrls: ['./recipe-filter.component.scss']
})
export class RecipeFilterComponent implements OnInit {
  searchLoading: boolean;
  recipeName: string;

  @Output() searched: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchChange(recipeName: string) {
    this.searched.emit(recipeName);
  }
}
