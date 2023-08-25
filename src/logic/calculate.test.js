import calculate from './calculate';

describe('calculate functionality', () => {
  test('should add two numbers together and return the result in an object with a total property', () => {
    const obj = {
      total: '1',
      next: '2',
      operation: '-',
    };

    const res = calculate(obj, 'AC');
    expect(res).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});