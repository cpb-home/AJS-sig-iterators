export default class Team {
  from = 0;
  to = 3;
  length = 3;
  current = 0;
  
  [Symbol.iterator]() {
    return this;
  }
  next() {
    if (this.current === this.length) {
      return {
        done: true
      }
    }
    
    return {
      value: this[this.current++],
      done: false
    }
  }
}
