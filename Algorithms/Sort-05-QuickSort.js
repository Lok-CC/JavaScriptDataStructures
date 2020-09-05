/*
***************** QUICK SORT **********************
1. Pivot Helper. 
Example:
    1. pivot([4,8,2,1,5,7,6,3])     // return pivot index = 3.
                                    // [3,2,1,4,5,7,6,8]
*/

// Colt's solution
function pivot(arr, start=0, end=arr.length-1){
    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    let swapIdx = start;

    for(let i=start; i<arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    swap(arr, start, swapIdx)
//     console.log(arr);
    return swapIdx;
}


// 2. Quick Sort
//      Example: quickSort([100,-3,2,4,6,9,1,2,5,3,23])
//               quickSort([4,6,9,1,2,5,3])
function quickSort(arr, left=0, right=arr.length-1){
   if(left < right){
       let pivotIndex = pivot(arr, left, right);
       // left
       quickSort(arr, left, pivotIndex-1);
       // right
       quickSort(arr, pivotIndex+1, right);    
   }
   return arr;   
}

// quickSort([4,6,9,1,2,5,3])
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
// 3,2,1    6,9,5
//     3      6
// 2,1      5   9
//   2
// 1