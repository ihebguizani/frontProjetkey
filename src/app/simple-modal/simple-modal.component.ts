import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-simple-modal',
  templateUrl: './simple-modal.component.html',
  styleUrl: './simple-modal.component.css'
})
export class SimpleModalComponent {
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.visible = false;
    this.close.emit();
  }

}
