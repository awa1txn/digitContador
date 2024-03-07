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
        //CALCULATES DIFFER BETWEEN TWO LATEST NUMS IN ARRAY OF ALL NETWORTHS
        //COULD BE POSITIVE OR NEGATIVE NUM AS WELL, OR ZERO.
        const sumFirst = sumNumbers(Object.values(array[0]).slice(1,4)) ;
        const sumSecond = sumNumbers(Object.values(array[1]).slice(1,4));

        return (sumFirst - sumSecond).toFixed(2);
    }

    export function collectAllNetworths(array){
        //RETURNS ONLY SUM OF CARD, CASH, CRYPTO NUMS USING sumNumbers()
        const sortedArray = array.sort((a,b)=> b.id - a.id);
        const slicedArray = sortedArray.slice(0,5);
        let newArray = []
        slicedArray.map(el => {
            newArray.push(sumNumbers(Object.values(el).slice(1,4)))
        })
        return newArray
    }

    export function collectAllDates(array){
        //HERE WE COLLECT ALL DATES FROM ARRAY AND RETURN THEM IN SAME ARRAY BUT WITH SLICES FROM 0 TO 10.
        //MEANING ONLY YEAR-MONTH-DAY FORMAT
        const sortedArray = array.sort((a,b)=> b.id - a.id);
        const slicedArray = sortedArray.slice(0,5);
        let newArray = []
        slicedArray.map(el => {
            console.log(Object.values(el))
            newArray.push(Object.values(el).slice(4,5)[0].slice(0,10))
        })
        newArray.reverse()
        return newArray
    }