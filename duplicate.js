const names = ['Akash', 'Batash', 'Nodi', 'Karim', 'Rahim', 'Nodi', 'Abul', 'Batash', 'Akash'];

function removeDuplicate(names) {
    const unique = [];
    /* for (let i = 0; i < names.length; i++) {
        const element = names[i];
        console.log(element);
    } */
    for (const element of names) {
        console.log(element);
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);


const arrNumber = [23, 45, 25, 36, 47, 23, 80, 69, 25, 36, 79, 34];

function removeDuplicateNum(numbers) {
    const unique = [];
    for (const element of numbers) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
        else {
            console.log('duplicate', unique, element);
        }
    }
    return unique;
}

const uniqueNumbers = removeDuplicateNum(arrNumber);
console.log(uniqueNumbers);