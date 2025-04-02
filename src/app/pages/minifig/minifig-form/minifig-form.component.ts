import {Component, EventEmitter, Output} from '@angular/core';
import {Minifig} from '../../../models/minifig.model';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-minifig-form',
  imports: [
    FormsModule
  ],
  templateUrl: './minifig-form.component.html',
  styleUrl: './minifig-form.component.scss'
})
export class MinifigFormComponent {
  newMinifig: Minifig = { id: 0, name: '', theme: '' };

  @Output() addMinifigEvent = new EventEmitter<Minifig>();

  addMinifig(): void {
    if (this.newMinifig.name.trim() && this.newMinifig.theme.trim()) {
      this.addMinifigEvent.emit(this.newMinifig);
      this.newMinifig = { id: 0, name: '', theme: '' };
    }
  }
}
