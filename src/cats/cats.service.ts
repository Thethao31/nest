import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [
    {
      id: 1,
      name: 'huyen',
      age: 34,
      breed: 'banh mi',
    },
    {
      id: 2,
      name: 'nhung',
      age: 35,
      breed: 'banh trang',
    },
  ];

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOne(id: number): Cat {
    return this.cats.find((cat) => cat.id === id);
  }

  length(): number {
    return this.cats.length;
  }

  // update(id: number, cat: Cat): Cat {
  //   this.cats.(cat);
  // }

  delete(id: number): void {
    this.cats.filter((cat) => cat.id !== id);
  }
}
