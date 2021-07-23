import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';

@Module({
  controllers: [MessagesController],
  // providers means things that can be used as dependecies for other classes
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
