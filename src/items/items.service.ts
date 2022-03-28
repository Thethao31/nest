import { Item } from './interfaces/item.interface';
import { Inject, Injectable, Optional } from '@nestjs/common';

@Injectable()
export class ItemsService {
  constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: Item[]) {}

  private readonly items: Item[] = [
    {
      id: '1',
      name: 'the',
    },
    {
      id: '2',
      name: 'thao',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  length() {
    return this.items.length;
  }

  findGet(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
