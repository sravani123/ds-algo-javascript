class FindTriplet {
    constructor(input) {
        this.input = input;
    }
    getTripletPair = (targetSum) => {
        let sortedArray = this.input.sort();
        for (let i = 0; i < sortedArray.length; i++) {
            let start = 1;
            let end = sortedArray.length - 1;
            let requiredSum = targetSum - sortedArray[i];
            while (start < end) {
                if (sortedArray[start] + sortedArray[end] > requiredSum) {
                    end--;
                } else if (sortedArray[start] + sortedArray[end] < requiredSum) {
                    start++;
                } else {
                    console.log(sortedArray[i] + '=>' +sortedArray[start] + '=> ' + sortedArray[end]);
                    return;
                }
            }


        }

        console.log(sortedArray);
    }
}

let triplets = new FindTriplet([3, 7, 3, 3, 1, 6, 2, 8, 9]);

triplets.getTripletPair(7);
