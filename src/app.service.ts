//root module and request first service of the application ;
import { Injectable } from '@nestjs/common';

@Injectable() //extra metadata or extra behavior add to the class by using this decorator;
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
