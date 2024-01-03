import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/services/user.service';
import * as bcrypt from 'bcrypt';
import { UserDto } from 'src/domains/dto/user.dto';
import { User } from 'src/domains/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  createToken(user: User) {
    const payload = { id: user.id, username: user.email };
    return {
      access_token: this.jwtService.sign(payload, {
        expiresIn: '1d',
        issuer: 'API Money Wise App',
        secret: process.env.JWT_SECRET,
      }),
    };
  }

  checkToken(token: string) {
    try {
      return this.jwtService.verify(token);
    } catch (e) {
      throw new UnauthorizedException('Wrong token provided');
    }
  }

  async signIn(email: string, pass: string) {
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Wrong credentials provided');
    }

    if (!(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException('Wrong credentials provided');
    }

    return this.createToken(user);
  }

  async signOut() {
    return { message: 'User signed out' };
  }

  async signUp(data: UserDto) {
    if (await this.userService.findOneByEmail(data.email)) {
      throw new UnauthorizedException('User already exists');
    }

    const user = await this.userService.create(data);
    return this.createToken(user);
  }
}
