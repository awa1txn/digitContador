// @ts-nocheck
    export function sumNumbers(array) {
    const sumOfNumbers = array.reduce((accumulator, currentValue) => {
        if (typeof currentValue === 'number') {
        return accumulator + currentValue;
        }
        return accumulator;
    }, 0);

    return sumOfNumbers;
    }

    export function getTwoLatestObjects(objectsArray) {
    // Make sure the array is not empty
    if (objectsArray.length === 0) {
        return [];
    }

    // Sort the array based on the date property in descending order
    const sortedArray = objectsArray.sort((a, b) => b.id - a.id);

    // Return the first two objects (latest ones)
    return sortedArray.slice(0, 2);
    }

    export function calculateDifference(array) {
        const sumFirst = sumNumbers(Object.values(array[0]).slice(1,4)) ;
        const sumSecond = sumNumbers(Object.values(array[1]).slice(1,4));

        return sumFirst - sumSecond;
    }

    export function collectAllNetworths(array){
        const sortedArray = array.sort((a,b)=> b.id - a.id);
        const slicedArray = sortedArray.slice(0,5);
        let newArray = []
        slicedArray.map(el => {
            newArray.push(sumNumbers(Object.values(el).slice(1,4)))
        })
        return newArray
    }

    export function collectAllDates(array){
        const sortedArray = array.sort((a,b)=> b.id - a.id);
        const slicedArray = sortedArray.slice(0,5);
        let newArray = []
        slicedArray.map(el => {
            newArray.push(Object.values(el).slice(4,5)[0].slice(0,10))
        })
        return newArray
    }