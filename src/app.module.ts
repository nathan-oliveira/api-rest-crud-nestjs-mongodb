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
    // MongooseModule.forRoot('mongodb://root:example@localhost:27017/test?authSource=admin&readPreference=primary'),
    DbModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
