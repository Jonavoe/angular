import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';

  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  onRegister(): void {
    const credentials = {
      name: this.name,
      email: this.email,
      password: this.password,
    };

    this.registerService.register(credentials).subscribe({
      next: response => {
        this.navigateTo('/login');
        console.log('Register exitoso:', response);
      },
      error: err => {
        console.error('Error en el register:', err);
      },
    });
  }
}
