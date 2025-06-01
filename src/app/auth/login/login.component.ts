import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],  // import CommonModule để dùng ngModel, etc.
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  // logic...

    constructor(private router: Router) {}


  login() {
    // Giả lập kiểm tra username/password
    if (this.username === 'admin' && this.password === '123') {
      this.router.navigate(['/home']);
    } else {
      alert('Sai tài khoản hoặc mật khẩu');
    }
  }

}
