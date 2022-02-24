import calculate from './calculate';

function isNum(item) {
  return !!item.match(/[0-9]+/);
}

export default function maths(ob, btnName) {
  if (btnName === 'AC') {
    return {
      total: 0,
      next: null,
      operation: null,
    };
  }

  if (isNum(btnName)) {
    if (btnName === '0' && ob.next === '0') {
      return {};
    }
    if (ob.calculation) {
      if (ob.next) {
        return { ...ob, next: ob.next + btnName };
      }
      return { ...ob, next: btnName };
    }

    if (ob.next) {
      return {
        next: ob.next + btnName,
        total: null,
      };
    }
    return {
      next: btnName,
      total: null,
    };
  }

  if (btnName === '.') {
    if (ob.next) {
      if (ob.next.includes('.')) {
        return { ...ob };
      }
      return { ...ob, next: `${ob.next}` };
    }
    if (ob.total) {
      if (ob.total.includes('.')) {
        return {};
      }
      return { total: `${ob.total}.` };
    }
    return { total: '0.' };
  }

  if (btnName === '=') {
    if (ob.next && ob.calculation) {
      return {
        total: (ob.total, ob.next, ob.calculation),
        next: null,
        calculation: null,
      };
    }
    return {};
  }
  if (btnName === '+/-') {
    if (ob.next) {
      return { ...ob, next: (-1 * parseFloat(ob.next)).toString() };
    }
    if (ob.total) {
      return { ...ob, next: (-1 * parseFloat(ob.total)).toString() };
    }
    return {};
  }
}
