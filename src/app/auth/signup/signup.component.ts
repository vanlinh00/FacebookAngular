import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';  // **Import RouterModule**  // cho đoạn sigun hoạt động

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  username = '';
  email = '';
  fullName = '';
  password = '';
  errorMsg = '';

  constructor(private router: Router) {}

  signup() {
    // Giả lập xử lý đăng ký (bạn thay bằng service thật)
    if (this.username && this.email && this.password) {
      console.log('Sign up:', {
        username: this.username,
        email: this.email,
        fullName: this.fullName,
        password: this.password,
      });
      // Sau khi đăng ký thành công chuyển về login
      this.router.navigate(['/login']);
    } else {
      this.errorMsg = 'Please fill all required fields!';
    }
  }
}
