import { Global, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,  //stripping out elements that are not defined in class format in input json
  }));
  await app.listen(8000);
}
bootstrap();
