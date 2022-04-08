import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

// import {
//   PipeTransform,
//   Injectable,
//   ArgumentMetadata,
//   BadRequestException,
// } from '@nestjs/common';
// import { ObjectSchema } from 'joi';

// @Injectable()
// export class JoiValidationPipe implements PipeTransform {
//   constructor(private schema: ObjectSchema) {}

//   transform(value: any, metadata: ArgumentMetadata) {
//     const { error } = this.schema.validate(value);
//     if (error) {
//       throw new BadRequestException('Validation failed');
//     }
//     return value;
//   }
// }
