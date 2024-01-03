import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { ServicesModule } from 'src/services/services.module';
import { LoginController } from './login.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [ServicesModule, AuthModule],
  controllers: [UserController, LoginController],
})
export class ControllerModule {}
