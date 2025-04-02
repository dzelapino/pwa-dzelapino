import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {UserComponent} from '../user/user.component';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    UserComponent
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
