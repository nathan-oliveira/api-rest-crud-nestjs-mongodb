import { NestExpressApplication } from '@nestjs/platform-express';
import { HttpException, HttpStatus } from '@nestjs/common';

export class Cors {
  static enableCors(app: NestExpressApplication) {
    return app.enableCors({
      exposedHeaders: ['X-Total-Items'],

      origin: function (origin, callback) {
        if (process.env.NODE_ENV === 'development') {
          callback(null, true);
          return;
        }

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
