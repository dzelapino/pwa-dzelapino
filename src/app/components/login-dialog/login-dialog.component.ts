import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from '@angular/material/dialog';
import {AuthService} from '../../services/auth.service';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login-dialog',
  imports: [
    FormsModule,
    MatInput,
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    NgIf
  ],
  templateUrl: './login-dialog.component.html',
  styleUrl: './login-dialog.component.scss'
})
export class LoginDialogComponent {
  username: string = '';
  password: string = '';
  loginError: string = '';

  constructor(
    private readonly authService: AuthService,
    private readonly dialogRef: MatDialogRef<LoginDialogComponent>
  ) {}

  login(): void {
    if (this.username.trim() && this.password.trim()) {
      const isSuccess = this.authService.login(this.username, this.password);
      if (isSuccess) {
        this.dialogRef.close();
      } else {
        this.loginError = 'Błędna nazwa użytkownika lub hasło';
      }
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
