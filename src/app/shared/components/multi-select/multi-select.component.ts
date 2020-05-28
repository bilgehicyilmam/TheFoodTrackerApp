import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-multi-select',
  templateUrl: 'multi-select.component.html',
  styleUrls: ['multi-select.component.scss']
})
/**
 * Multi-select component which lets usage of checkboxes and radio buttons in selects
 */
export class MultiSelectComponent implements OnInit {
  /**
   * Options to be shown on select
   */
  @Input()
  public options: string[];

  /**
   * Specifies if multi-select uses checkboxes or radio-buttons.
   */
  @Input()
  public multiple = true;

  /**
   * Default option to be shown on select
   */
  @Input()
  public label: string;

  /**
   * Emits selected options as string array.
   */
  @Output()
  public selectionChange: EventEmitter<string[]> = new EventEmitter();

  public open = false;
  private selectedValues: { [key: string]: boolean } = {};

  constructor() {
  }

  public ngOnInit(): void {
    for (const option of this.options) {
      this.selectedValues[option] = false;
    }
  }

  /**
   * Toggles select menu
   */
  public toggleSelect(): void {
    this.open = !this.open;
  }

  /**
   * Closes select menu
   */
  public closeSelect(): void {
    this.open = false;
  }

  /**
   * adds or removed selected option and emits latest state of selectedOptions.
   * @param option changed checkbox
   * @param event DOM event bound to checkbox
   */
  public onCheckChange(option: string, event: any): void {
    this.selectedValues[option] = event.target.checked;
    const selectedOptions = this.toArray(this.selectedValues);
    this.selectionChange.emit(selectedOptions);
  }

  /**
   * emits selected option
   * @param option changed radio
   */
  public onRadioChange(option: string): void {
    this.selectionChange.emit([option]);
  }

  /**
   * emits all radio values
   */
  public onRadioAll(): void {
    this.selectionChange.emit(this.options);
  }

  private toArray(values: { [key: string]: boolean }): string[] {
    const out: string[] = [];
    for (const option in values) {
      if (values[option]) {
        out.push(option);
      }
    }
    return out;
  }

  @HostListener('document:keyup', ['$event'])
  /**
   * Closes select when Escape key pressed
   */
  public onKeyUp(ev: KeyboardEvent): void {
    if (ev.key === 'Escape') {
      this.open = false;
    }
  }

  @HostListener('document:click', ['$event'])
  /**
   * Closes select menu when document clicked
   */
  public onClickDocument(ev: MouseEvent): void {
    this.open = false;
  }
}
