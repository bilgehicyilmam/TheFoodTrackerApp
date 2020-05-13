import { Component, ElementRef, EventEmitter, HostListener, Inject, Input, OnInit, Output } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() showModal: boolean;
  @Input() title: string;
  @Output() closed = new EventEmitter<void>();


  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit(): void {
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    if (this.showModal) {
      this.closed.emit();
    }
  }
}
