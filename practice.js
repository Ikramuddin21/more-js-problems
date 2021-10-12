const arrNumbers = [23, 32, 80, 43, 79, 89, 93, 40, 82, 20, 48, 99, 96];

for (const number of arrNumbers) {
    // console.log(number);
    if (number > 80) {
        // console.log('biggest80', number);
    }
}



function largestNumberShow(numbers) {
    const newArrNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number >= 80) {
            newArrNumbers.push(number);
        }
    }
    return newArrNumbers;
}

const largestNumber = largestNumberShow(arrNumbers);
// console.log(largestNumber);

// object set property
let student = {
    id : 45,
    name : 'Rajib',
    age : 32,
    address : 'Cumilla sodor',
}
console.log(student);

student.name = 'Messi';

student['age'] = 70;

const studentId = 'id';
student[studentId] = 500;

const studentAddress = 'address';
student[studentAddress] = 'Dhaka Savar';

console.log(student);

// feet to inch
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
// console.log(feetToInch(4));

// centimeter to meter
function centimeterToMeter(cm) {
    const meter = cm * 0.01;
    return meter;
}
// console.log(centimeterToMeter(300));


function paperRequirments(firstBookCopy, secondBookCopy, thirdBookCopy) {
    const firstBookPrintPage = 100;
    const secondBookPrintPage = 200;
    const thirdBookPrintPage = 300;
    const firstBookNeededPaper = firstBookCopy * firstBookPrintPage;
    const secondBookNeededPaper = secondBookCopy * secondBookPrintPage;
    const thirdBookNeededPaper = thirdBookCopy * thirdBookPrintPage;
    const totalPaper = firstBookNeededPaper + secondBookNeededPaper + thirdBookNeededPaper;
    return totalPaper;
}
// console.log(paperRequirments(3, 2, 1));

// largest name
const bestFriend = ['John', 'Bohn', 'Akash', 'Batachi', 'SakibAlHason', 'KarimAhamedJoy'];
function biggestName(names) {
    let largestName = names[0];
    for (const name of names) {
        if (name.length > largestName.length) {
            largestName = name;
        }
    }
    return largestName;
}
const selectedName = biggestName(bestFriend);
// console.log(selectedName);

// 
const arrayNumbers = [23, 43, 41, 64, 23, -23, 76, -9, 89];
function onlyPositiveNumbers(numbers) {
    const newPositiveArr = [];
    for (const number of numbers) {
        if (number < 0) {
            break;
        }
        else {
            newPositiveArr.push(number);
        }
    }
    return newPositiveArr;
}

console.log(onlyPositiveNumbers(arrayNumbers));