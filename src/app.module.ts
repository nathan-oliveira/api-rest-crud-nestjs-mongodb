import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';

import { DbModule } from './mongoose/mongoose.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    DbModule,
    // MongooseModule.forRoot('mongodb://127.0.0.1:27017/test'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
