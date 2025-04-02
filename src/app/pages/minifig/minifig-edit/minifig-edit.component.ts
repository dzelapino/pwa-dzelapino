import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Minifig} from '../../../models/minifig.model';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-minifig-edit',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './minifig-edit.component.html',
  styleUrl: './minifig-edit.component.scss'
})
export class MinifigEditComponent {
  @Input() minifig: Minifig | null = null;
  @Output() minifigUpdated = new EventEmitter<Minifig>();
  @Output() cancelEditing = new EventEmitter<void>();

  updateMinifig(): void {
    if (this.minifig) {
      this.minifigUpdated.emit(this.minifig);
    }
  }

  cancel(): void {
    this.cancelEditing.emit();
  }
}
