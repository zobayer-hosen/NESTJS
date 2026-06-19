//handling requests and responses of the application ;
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() //mapping the HTTP GET request to the getHello() method of the AppService class;
  getHello(): string {
    return this.appService.getHello();
  }
}
