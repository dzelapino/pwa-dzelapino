import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  standalone: true,
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' = 'filled';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() iconOnly: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() disabled: boolean = false;

  @Input() loading: boolean = false;
  @Input() loadingText?: string;

  @Output() onClick = new EventEmitter<Event>();

  get materialIconStyleClass(): string {
    switch (this.iconStyle) {
      case 'outlined': return 'material-icons-outlined';
      case 'round': return 'material-icons-round';
      case 'sharp': return 'material-icons-sharp';
      default: return 'material-icons';
    }
  }

  get computedAriaLabel(): string {
    return this.iconOnly ? this.ariaLabel : (this.loading && this.loadingText ? this.loadingText : this.label);
  }
}
