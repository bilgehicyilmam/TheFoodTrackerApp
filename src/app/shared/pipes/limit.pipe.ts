import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})

export class LimitPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const limit = args[0];
    if (value && typeof value === 'string' && value.length > limit) {
      return value.substring(0, limit) + '...';
    }
    return value;
  }
}
