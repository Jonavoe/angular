import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router, private loginService: LoginService) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  onLogin(): void {
    const credentials = { email: this.email, password: this.password };

    this.loginService.login(credentials).subscribe({
      next: response => {
        this.navigateTo('/');
        console.log('Login exitoso:', response);
      },
      error: err => {
        console.error('Error en el login:', err);
      },
    });
  }
}
