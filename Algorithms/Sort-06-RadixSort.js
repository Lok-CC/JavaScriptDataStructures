/*
***************** Radix SORT **********************
1. Radix Helper. 
    1. getDigit(num, i)
        Example:
            1. getDigit(7323,2)
*/

// 1. getDigit(num, i)
function getDigit(num, i){
    return Math.floor(Math.abs(num)/Math.pow(10, i)) % 10;
}

// 2. digitCount(num)
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

// 3. mostDigits(nums) - we can leverage on "digitCount" method.
//      Example: mostDigits([23,567,89,12254611,90])
function mostDigits(nums){
    let maxDigits = 0;
    for(let i=0; i<nums.length; i++){
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

// Main function - Radix sort
//      Example: radixSort([23,345,5467,12,2345,9852])
function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k=0; k<maxDigitCount; k++){
        // create buckets with 10 empty array
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i=0; i < nums.length; i++){
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        console.log(digitBuckets);
        // form new array from the buckets(0-9).
        // Spread syntax goes one level deep, 
        // so it will spread out one layer nested array.
        nums = [].concat(...digitBuckets);
        console.log(nums);
    }
    return nums;
}