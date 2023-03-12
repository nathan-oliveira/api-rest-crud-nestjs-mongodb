import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpException, HttpStatus } from '@nestjs/common';

export class Cors {
  static enableCors(app: NestExpressApplication) {
    return app.enableCors({
      exposedHeaders: ['X-Total-Items'],

      origin: function (origin, callback) {
        const whitelist = process.env.WHITELIST_CORS.split(',');

        if (whitelist.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(
            new HttpException('Not allowed by CORS', HttpStatus.UNAUTHORIZED),
          );
        }
      },
    });
  }
}
