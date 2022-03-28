import { HttpExceptionFilter } from './filterException/http-exception.filter';
import { ForbiddenException } from './exceptoins/forbidden.exception';
import { HttpStatus, UseFilters } from '@nestjs/common';
// import { Controller, Get, Post } from '@nestjs/common';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(): string {
//     return 'This action adds a new cat';
//   }

//   @Get()
//   findAll(): string {
//     return 'This action returns all cats';
//   }
// }

// import {
//   Controller,
//   Get,
//   Query,
//   Post,
//   Body,
//   Put,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import {
//   CreateCatDto,
//   UpdateCatDto,
//   ListAllEntities,
// } from './dto/create-cat.dto';

// @Controller('cats')
// export class CatsController {
//   @Post()
//   create(@Body() createCatDto: CreateCatDto) {
//     return 'This action adds a new cat';
//   }

//   @Get()
//   findAll(@Query() query: ListAllEntities) {
//     return `This action returns all cats (limit: ${query.limit} items)`;
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return `This action returns a #${id} cat`;
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
//     return `This action updates a #${id} cat`;
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return `This action removes a #${id} cat`;
//   }
// }

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  HttpException,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  //   @UseFilters(HttpExceptionFilter)
  @UseFilters(new HttpExceptionFilter())
  async create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
    this.catsService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Cat[]> {
    // throw new HttpException(
    //   {
    //     status: HttpStatus.FORBIDDEN,
    //     error: 'This is a custom message',
    //   },
    //   HttpStatus.FORBIDDEN,
    // );
    throw new ForbiddenException();
    // return await this.catsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') createCatDto: CreateCatDto): Promise<Cat> {
    return this.catsService.findOne(createCatDto.id);
  }
}
