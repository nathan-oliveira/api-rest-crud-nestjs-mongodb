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
    // MongooseModule.forRoot('mongodb://localhost:27018/test'),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
