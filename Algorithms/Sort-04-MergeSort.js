// Merging Array
/* Example: 
    1. merge([1,10,50], [2,14,99,100])  //[1, 2, 10, 14, 50, 99, 100]
    2. merge([], [2,14,99,100])
    3. merge([100], [2,14,99])
*/

// Colt's solution
function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }else{
            results.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results;
}

// break an array into single piece (use recursive)
// then use function "merge" defined above to merge the pieces into array.
// Example: 
//      1. mergeSort([10,24,76,73])
//      1. mergeSort([10,24,76,73,1,9])
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}


