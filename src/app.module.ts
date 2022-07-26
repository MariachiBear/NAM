import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { AppController } from 'src/app.controller';
import { AppService } from 'src/app.service';
import { configModuleConfig } from 'src/config/config-module.config';
import { mongodbConfig } from 'src/config/database/mongodb.config';
import { throttlerProvider } from 'src/config/providers/throttler.provider';
import { throttlerConfig } from 'src/config/throttler.config';
import { UserModule } from 'src/models/user/user.module';

@Module({
   controllers: [AppController],
   providers: [AppService, throttlerProvider],
   imports: [
      ConfigModule.forRoot(configModuleConfig),
      MongooseModule.forRootAsync(mongodbConfig),
      ThrottlerModule.forRoot(throttlerConfig),
      UserModule,
   ],
})
export class AppModule {}
