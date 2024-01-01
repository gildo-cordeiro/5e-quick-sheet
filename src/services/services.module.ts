import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/domains/user.entity';
import { HttpLocalModule } from 'src/client/http-local.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), HttpLocalModule],
  providers: [UserService],
  exports: [UserService],
})
export class ServicesModule {}
