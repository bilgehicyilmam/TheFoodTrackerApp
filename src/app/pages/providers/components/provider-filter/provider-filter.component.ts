import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-provider-filter',
  templateUrl: 'provider-filter.component.html',
  styleUrls: ['provider-filter.component.scss']
})
/**
 * The filter component for reservation list
 */
export class ProviderFilterComponent implements OnInit {
  public filter = {};

  /**
   * Event emitted when user changes filter selection
   */
  @Output()
  public filterChange: EventEmitter<{ [key: string]: string[] | string }> = new EventEmitter();

  @Output()
  public addressFilterChange: EventEmitter<string> = new EventEmitter();
  public statusOptions: string[];

  public searchLoading = false;

  public restaurant: string;
  public address: string;
  public restaurant$: Subject<string> = new Subject();

  constructor() {
    this.statusOptions = [
      'Vegan',
      'Vegetarian',
      'Gluten-free',
      'Lactose Free',
      'Sugar Free'
    ];
    // this.shiftOptions = this.getValuesInObject(ReservationShift);
    // this.areaOptions = this.getValuesInObject(ReservationArea);
    // this.dateOptions = this.getValuesInObject(ReservationDate);
    // debounce is added to simulate real use-case
    this.restaurant$.pipe(debounceTime(500)).subscribe(text => {
      // tslint:disable-next-line:no-string-literal
      this.filter['restaurant'] = text;
      this.filterChange.emit(this.filter);
      this.searchLoading = false;
    });
  }

  /**
   * Event handler for multi-select
   * @param selectedOptions Selected options from multi-select
   * @param key Name of the multi-select
   */
  public onSelectionChange(selectedOptions: string[], key: string): void {
    this.filter[key] = selectedOptions;
    // tslint:disable-next-line:no-string-literal
    this.filter['restaurant'] = this.restaurant;
    this.filterChange.emit(this.filter);
  }

  /**
   * Event handler for search input.
   * Passes latest value to restaurant$ subject, which adds 500ms latency to prevent continuous searching.
   */
  public onSearchChange(restaurant: string): void {
    this.restaurant$.next(restaurant);
    this.searchLoading = true;
  }

  private getValuesInObject(obj: any): string[] {
    return Object.keys(obj).map(s => obj[s]) as string[];
  }

  ngOnInit() {
  }

  onAddressSearchChange(address: string) {
    this.addressFilterChange.emit(address);
  }
}
