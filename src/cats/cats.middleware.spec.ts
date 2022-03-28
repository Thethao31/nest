import { LoggerMiddleware } from './cats.middleware';

describe('LoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMiddleware()).toBeDefined();
  });
});
