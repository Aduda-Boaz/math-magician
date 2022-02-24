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
    if (ob.operation) {
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

    if (btnName === '.') {
      if (ob.next) 
    }{
      if (ob.next.includes('.')) {
        return { ...ob };
      }
      return { ...ob, next: `${ob.next}.` };
    }
  }
}