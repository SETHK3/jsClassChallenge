class Alternator {
  constructor(items) {
    this.array = items;
    this.alternator = 0;
  }

  alternate(items) {
    const lengthOfArray = this.array.length;

    for (let i = 0; i < lengthOfArray; i++) {
      if (this.alternator === 0) {
        console.log(this.array.shift());
        this.alternator = 1;
      } else {
        console.log(this.array.pop());
        this.alternator = 0;
      }
    }
  }
}

const items = [1, 2, 3, 4, 5];
const newArray = new Alternator(items);

newArray.alternate();
