import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { HttpLocalService } from './http-local.service';

@Module({
  imports: [HttpModule],
  providers: [HttpLocalService],
  exports: [HttpLocalService],
})
export class HttpLocalModule {}
