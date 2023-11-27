import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages(){}

    @Post()
    createMessage(@Body() body:CreateMessageDto){
        console.log("Body", body)
    }

    @Get("/:id")
    getMessage(@Param("id") id:string){
        console.log("ID", id);
    }
}