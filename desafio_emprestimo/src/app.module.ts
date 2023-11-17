import { Module } from '@nestjs/common';
import { ClienteController } from './cliente/cliente.controller';
import { ClienteService } from './cliente/cliente.service';

@Module({
  imports: [],
  controllers: [ClienteController],
  providers: [ClienteService],
})
export class AppModule {}
