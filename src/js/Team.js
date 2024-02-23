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

/*
[Symbol.iterator] = function() {
    return {
      counter: 0,
      next() {
        if (this.counter === this.length) {
          return {
            value: undefined,
            done: true
          }
        }
        this.counter++;
        return {
          value: this[this.counter],
          done: false
        }
      }
    }
  }
}
*/