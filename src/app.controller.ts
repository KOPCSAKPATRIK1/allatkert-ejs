import { Body, Controller, Get, Post, Render } from '@nestjs/common';
import { AnimalDto } from './allat.dto';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('form')
  getHello(): object {
    return {};
  }

  @Post()
  @Render('allatadatai')
  handleColor(@Body() body: AnimalDto): object {
    return body;
  }
}
