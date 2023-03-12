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
    console.log(this.request.headers['aplication-request']);
    const uri = 'mongodb://localhost:27018/test';
    return {
      uri,
    };
  }
}
