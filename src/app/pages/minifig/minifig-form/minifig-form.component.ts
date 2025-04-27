import {Component, EventEmitter, Output} from '@angular/core';
import {Minifig} from '../../../models/minifig.model';
import {FormsModule} from '@angular/forms';
import {ButtonComponent} from "../../../components/button/button.component";

@Component({
  selector: 'app-minifig-form',
    imports: [
        FormsModule,
        ButtonComponent
    ],
  templateUrl: './minifig-form.component.html',
  styleUrl: './minifig-form.component.scss'
})
export class MinifigFormComponent {
  newMinifig: Minifig = { id: Date.now(), name: '', image: getRandomImage(), hasBeenBought: false };

  @Output() addMinifigEvent = new EventEmitter<Minifig>();

  addMinifig(): void {
    if (this.newMinifig.name.trim()) {
      this.addMinifigEvent.emit(this.newMinifig);
      this.newMinifig = { id: Date.now(), name: '', image: getRandomImage(), hasBeenBought: false };
    }
  }
}

const imageOptions: Minifig['image'][] = ['b2', 'jarjar', 'revan', 'vader'];

function getRandomImage(): Minifig['image'] {
  const index = Math.floor(Math.random() * imageOptions.length);
  return imageOptions[index];
}
