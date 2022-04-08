import { ConfigModule } from '@nestjs/config';
// import { LoggingInterceptor } from './cats/interceptor/logging.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // middleware all project
  // app.use(logger);
  // app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new RolesGuard());
  // app.useGlobalInterceptors(new LoggingInterceptor());
  // ConfigModule.forRoot({
  //   isGlobal: true,
  // });

  await app.listen(3000);
}
bootstrap();

// logger o cats.middleware.ts
