import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domains/user.entity';
import { ServicesModule } from 'src/services/services.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule,
    ServicesModule,
  ],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
