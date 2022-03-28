import { LoggerMiddleware } from './cats/cats.middleware';
import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ItemsController } from './items/items.controller';
// import { ItemsService } from './items/items.service';
import { CatsService } from './cats/cats.service';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude({ path: 'cats', method: RequestMethod.GET })
      // .forRoutes({ path: 'cats', method: RequestMethod.GET });
      .forRoutes(CatsController);
  }
}

// logger o cats.middleware.ts
// consumer.apply(logger).forRoutes(CatsController);

// khong bao gom phuong thuc nao
// consumer
//   .apply(LoggerMiddleware)
//   .exclude(
//     { path: 'cats', method: RequestMethod.GET },
//     { path: 'cats', method: RequestMethod.POST },
//     'cats/(.*)',
//   )
//   .forRoutes(CatsController);
