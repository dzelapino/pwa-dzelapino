import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserComponent} from '../user/user.component';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    UserComponent,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
