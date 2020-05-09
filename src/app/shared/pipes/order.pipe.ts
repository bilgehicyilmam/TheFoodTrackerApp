import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'lodash';

@Pipe({
  name: 'order'
})
/**
 * Sorts object arrays by passed field
 */
export class OrderPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const orderBy = args[0];
    if (!orderBy) {
      return value;
    }
    const order = args[1] ? 'desc' : 'asc';
    if (!orderBy) {
      return value;
    }
    return _.orderBy(value, [orderBy], [order]);
  }
}
