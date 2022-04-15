import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

import { KafkaService } from './kafka.service';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [KafkaService],
  exports: [KafkaService], // Deve expotar o módulo para poder usar em outros lugares
})
export class MessagingModule {}
