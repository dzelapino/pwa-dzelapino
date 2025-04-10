import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {CommonModule, NgIf} from '@angular/common';

@Component({
  selector: 'app-navlink',
  imports: [
    RouterLink,
    NgIf,
    CommonModule
  ],
  templateUrl: './navlink.component.html',
  styleUrl: './navlink.component.scss'
})
export class NavlinkComponent {
  @Input() label: string = '';
  @Input() icon: string = '';
  @Input() iconStyle: 'filled' | 'outlined' | 'round' | 'sharp' = 'filled';
  @Input() iconPosition: 'left' | 'right' = 'left';
  @Input() iconOnly: boolean = false;
  @Input() ariaLabel: string = '';
  @Input() path: string = '';

  get materialIconStyleClass(): string {
    switch (this.iconStyle) {
      case 'outlined': return 'material-icons-outlined';
      case 'round': return 'material-icons-round';
      case 'sharp': return 'material-icons-sharp';
      default: return 'material-icons';
    }
  }

  get computedAriaLabel(): string {
    return this.iconOnly ? this.ariaLabel : this.label;
  }
}
