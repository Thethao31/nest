import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // middleware all project
  // app.use(logger);
  await app.listen(3000);
}
bootstrap();

// logger o cats.middleware.ts
