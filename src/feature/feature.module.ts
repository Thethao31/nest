import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({ imports: [ConfigModule] })
export class FeatureModule {
  constructor(private configService: ConfigService) {}

  // get an environment variable
  dbUser = this.configService.get<string>('DATABASE_USER');

  // get a custom configuration value
  dbHost = this.configService.get<string>('database.host');
}
