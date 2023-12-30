import { Module } from '@nestjs/common';
import { ControllerModule } from './controllers/controllers.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ControllerModule, ServicesModule],
})
export class AppModule {}
