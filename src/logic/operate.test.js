import operate from './operate';

describe('operate functionality', () => {
  test('should return 20 when the first number is 15 and second one is 5, operator is + ', () => {
    const res = operate(15, 5, '+');
    expect(res).toBe('20');
  });

  test('should return 10 when the first number is 15 and second one is 5, operator is - ', () => {
    const res = operate(15, 5, '-');
    expect(res).toBe('10');
  });

  test('should return 3 when the first number is 15 and second one is 5, operator is ÷ ', () => {
    const res = operate(15, 5, '÷');
    expect(res).toBe('3');
  });

  test('should return 75 when the first number is 15 and second one is 5, operator is x ', () => {
    const res = operate(15, 5, 'x');
    expect(res).toBe('75');
  });

  test('should return 0 when the first number is 15 and second one is 5, operator is x ', () => {
    const res = operate(15, 5, '%');
    expect(res).toBe('0');
  });
});