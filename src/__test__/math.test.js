import calculate from '../events/math';

describe('Button AC', () => {
  const obj1 = {
    total: '2',
    next: '1',
    operation: null,
  };
  const obj2 = {
    total: 0,
    next: null,
    operation: null,
  };
  test('Button AC', () => {
    expect(calculate(obj1, 'AC')).toMatchObject(obj2);
  });
});
describe('Equal', () => {
  const obj1 = {
    total: '2',
    next: '1',
    operation: '-',
  };
  const obj2 = {
    total: '1',
    next: null,
    operation: null,
  };
  test('Equal button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});
describe('Addition', () => {
  const obj1 = {
    total: '2',
    next: '1',
    operation: '+',
  };
  const obj2 = {
    total: '3',
    next: null,
    operation: null,
  };
  test('Addition button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});
describe('Substraction', () => {
  const obj1 = {
    total: '2',
    next: '1',
    operation: '-',
  };
  const obj2 = {
    total: '1',
    next: null,
    operation: null,
  };
  test('Substraction button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('Multiplication', () => {
  const obj1 = {
    total: '2',
    next: '2',
    operation: '*',
  };
  const obj2 = {
    total: '4',
    next: null,
    operation: null,
  };
  test('Multiplication button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('Division', () => {
  const obj1 = {
    total: '9',
    next: '3',
    operation: '/',
  };
  const obj2 = {
    total: '3',
    next: null,
    operation: null,
  };
  test('Division button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('Module', () => {
  const obj1 = {
    total: '8',
    next: '5',
    operation: '%',
  };
  const obj2 = {
    total: '3',
    next: null,
    operation: null,
  };
  test('Module button', () => {
    expect(calculate(obj1, '=')).toMatchObject(obj2);
  });
});

describe('Positive or Negative', () => {
  const obj1 = {
    total: null,
    next: '1',
    operation: '+/-',
  };
  const obj2 = {
    next: '-1',
  };
  test('Positive or Negative', () => {
    expect(calculate(obj1, '+/-')).toMatchObject(obj2);
  });
});
