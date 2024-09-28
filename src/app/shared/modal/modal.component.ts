import { CommonModule, NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, NgIf, NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Input() background: 'primary' | 'white' = 'primary';
  @Input() id: string = '';
  @Input() title: string = 'Modal Title';
  @Input() size: string = 'modal-lg';
  @Input() isVisible: boolean = false; 
  @Output() closeModalEvent: EventEmitter<void> = new EventEmitter<void>();
  
  constructor() {}
  closeModal(): void {
      this.isVisible = false;
      this.closeModalEvent.emit();
    }
}
