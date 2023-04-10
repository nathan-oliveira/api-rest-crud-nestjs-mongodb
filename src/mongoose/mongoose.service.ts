import { Inject, Injectable, Scope } from '@nestjs/common';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable({ scope: Scope.REQUEST })
export class MongooseConfigService implements MongooseOptionsFactory {
  constructor(@Inject(REQUEST) private readonly request: Request) { }

  createMongooseOptions(): MongooseModuleOptions {
    const dbName = this.request.headers['aplication-request'] || 'development';
    const uri = `mongodb://root:example@localhost:27017/${dbName}?authSource=admin&readPreference=primary`;
    return {
      uri,
    };
  }
}
