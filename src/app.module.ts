import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';
import { User } from './repo/user.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { FeatureModule } from './feature/feature.module';
import configuration from './configs/keys';
import Joi = require('joi');

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(3000),
      }),
    }),
    TypeOrmModule.forRoot(),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'chelseafc2001',
      database: 'typeormnestjs',
      entities: [User],
      synchronize: true,
      autoLoadEntities: true,
    }),
    // ConfigModule.forRoot({
    //   load: [configuration],
    // }),
    UsersModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    FeatureModule,

    // TypeOrmModule.forRootAsync({
    //   useFactory: async () =>
    //     Object.assign(await getConnectionOptions(), {
    //       autoLoadEntities: true,
    //     }),
    // }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
