// // import { CreateItemDto } from './dto/create-item.dto';
// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Param,
//   Header,
//   HttpCode,
//   HttpStatus,
//   Redirect,
//   Res,
// } from '@nestjs/common';
// import { ItemsService } from './items.service';
// import { Item } from './interfaces/item.interface';
// import { Observable, of } from 'rxjs';

// @Controller('items')
// // @Controller({ host: 'admin.example.com' })
// // @Controller({ host: '3000' })
// export class ItemsController {
//   constructor(private readonly itemsService: ItemsService) {}

//   @Post()
//   create(@Res() res: Response) {
//     res.status(HttpStatus.CREATED).send();
//   }

//   @Get()
//   findAll(@Res() res: Response) {
//     return res.status(HttpStatus.OK).json([]);
//   }

//   @Get('g')
//   // @Header('Cache-Controlergfvd', 'nongre')
//   // @HttpCode(500)
//   // @Redirect('https://google.com')
//   // findAll() {
//   //   return 'This action adds a new cat';
//   // }
//   // @Get('e')
//   // async findAll(): Promise<Item[]> {
//   //   return await this.itemsService.findAll();
//   // }
//   @Get('get')
//   findGet(): string {
//     return 'c';
//   }

//   // @Get()
//   // async findAll(): Promise<Item[]> {
//   //   return await this.itemsService.findAll();
//   // }

//   @Get(':id')
//   findOne(@Param('id') id): Item {
//     return this.itemsService.findOne(id);
//   }

//   //   @Get(':id')
//   //   findOne(@Param('id') param): number {
//   //     return param;
//   //   }

//   //   @Post()
//   //   create(@Body() createItem: CreateItemDto): string {
//   //     return `Name: ${createItem.name} description: ${createItem.description}`;
//   //   }
// }

import { Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Controller('cats')
export class ItemsController {
  @Post()
  create(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send('cc');
  }

  // @Get()
  // findAll(@Res() res: Response) {
  //   res.status(HttpStatus.OK).json([]);
  // }

  @Get()
  findAll(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return [{ meg: 'concac' }];
  }
}
