class Pairproblem {
    constructor(input) {
        this.input = input;
    }
    getPair = (target) => {
        let map = new Map();
        for (let i = 0; i < this.input.length; i++) {
            let result = target - this.input[i];
            if (map.has(result)) {
                console.log(map.get(result) + 'and ' + this.input[i]);
                return map.get(result) + 'and ' + this.input[i];
            }
            map.set(this.input[i], this.input[i]);
        }

    }
}

const  Pairproblem = new Pairproblem([1,2,3,4,5,6,7,8,9]);
Pairproblem.getPair(6);
