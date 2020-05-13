import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/recipe';

@Pipe({
  name: 'recipefilter'
})

export class RecipeFilterPipe implements PipeTransform {
  transform(value: Recipe[], ...args: any[]): any {
    const filter = args[0];
    if (!value || !filter) {
      return value;
    }

    return value.filter(r => {
      const name = r.name.toLowerCase();
      return name.indexOf(filter.toLowerCase()) > -1;
    });
  }
}
