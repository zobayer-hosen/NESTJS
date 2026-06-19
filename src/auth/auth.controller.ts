import { AuthService } from './auth.service';
import { Controller, Post } from '@nestjs/common';

@Controller('auth') //specifies that all routes in this controller will be prefixed with 'auth';
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register() {
    const result = this.authService.registerUser();
    return result;
  }
}
