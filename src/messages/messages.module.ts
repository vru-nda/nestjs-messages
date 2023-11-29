import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagseRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagseRepository]
})
export class MessagesModule {}
