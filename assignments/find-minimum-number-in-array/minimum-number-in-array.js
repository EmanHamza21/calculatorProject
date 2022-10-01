const TestArray = [10, 3, 2, 0, 1, 9];
let currentMax;


let mini = getMinimumNumber(TestArray);
console.log('minimum number', mini);

let sort = sortArrayOfNumbers(TestArray);
console.log('max number', sort);

function getMinimumNumber(numbers) {
    let currentMin = numbers[0];
    if (!numbers.length) {
        throw new Error('This should not be empty');
    }
    for (let i = 1; i < numbers.length; i++) {
        if (currentMin > numbers[i]) {
            currentMin = numbers[i]
        }
    }
    return currentMin;
}

function sortArrayOfNumbers(numbers) {
    if (!numbers.length) {
        throw new Error('This should not be empty');
    }
    for (let i = 0; i < numbers.length; i++) {
        let outerElement = numbers[i];

        for (let j = i + 1; j < numbers.length; j++) {
            let innerElement = numbers[j];

            if (outerElement > innerElement) { 
                // swap
                numbers[i] = innerElement;
                numbers[j] = outerElement;

                // re-order
                outerElement = numbers[i];
                innerElement = numbers[j]; 
            }
        }
    }
    return numbers;
}


