import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';
import {NgIf} from '@angular/common';
import {MatDialog} from '@angular/material/dialog';
import {LoginDialogComponent} from '../login-dialog/login-dialog.component';
import {MatButton} from '@angular/material/button';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-user',
  imports: [
    FormsModule,
    NgIf,
    MatButton,
    ButtonComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  user: User | null = null;

  constructor(private readonly authService: AuthService, private readonly dialog: MatDialog) {
    this.user = this.authService.getUser();
  }

  openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginDialogComponent, {
      width: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      this.user = this.authService.getUser();
    });
  }

  logout(): void {
    this.authService.logout();
    this.user = null;
  }
}
