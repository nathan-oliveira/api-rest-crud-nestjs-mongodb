import { ArgumentsHost, ExceptionFilter, HttpStatus } from '@nestjs/common';
import { EntityNotFoundError } from 'typeorm';
import { Response } from 'express';

type TResponse = {
  message: string[];
};

interface ErrorFilter extends EntityNotFoundError {
  response: TResponse | string;
  status: number;
  message: string;
}

export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: ErrorFilter, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();

    const statusCode = exception.status ?? HttpStatus.NOT_FOUND;
    const message =
      exception.response instanceof Object
        ? exception.response.message
        : [exception.message];

    return res.status(statusCode).json({ statusCode, message });
  }
}
