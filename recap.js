function largestNumber (numbers) {
    let max = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element > max) {
            max = element;
        }
    }
    return max;
}

let arr = [23, 34, 45, 21, 89, 28, 8, 5];
const checkLargestNum = largestNumber(arr)
console.log(checkLargestNum);

function smallestNumber (numbers) {
    let min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element < min) {
            min = element;
        }
    }
    return min;
}

const checkSmallestNum = smallestNumber(arr)
console.log(checkSmallestNum);