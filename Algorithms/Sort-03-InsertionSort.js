// Insertion Sort:
// Example: insertionSort([23,54,12,5,9,34,-3,1]);

// My Solution:
function insertionSort(arr){
    // first loop: arr length, start index 1.
    for(let i=1; i<arr.length; i++){
        // second loop: loop backward
        for(let j=i; j>0; j--){
            if(arr[j-1]>arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
        console.log(arr);
        console.log("Finished one loop");
    }
    return arr;
}

// Colt's Solution:
function insertionSort1(arr){
    for(let i=0; i<arr.length; i++){
        let currentValue = arr[i];
        for(var j=i-1; j >=0 && arr[j] > currentValue; j--){
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}