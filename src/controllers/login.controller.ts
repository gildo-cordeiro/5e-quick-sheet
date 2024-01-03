import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from 'src/domains/dto/user.dto';

@Controller('auth')
export class LoginController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signIn(@Body() { email, password }: UserDto) {
    return this.authService.signIn(email, password);
  }

  @Post('signup')
  async signUp(@Body() data: UserDto) {
    return this.authService.signUp(data);
  }

  @Get('signout')
  async signOut() {
    return this.authService.signOut();
  }

  resetPassword() {
    return { message: 'Password reset' };
  }
}
