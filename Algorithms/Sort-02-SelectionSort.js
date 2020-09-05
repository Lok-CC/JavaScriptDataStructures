// Selection Sort
// Example: selectionSort([23,54,12,5,9,34,-3,1])

// My Solution
// Multiple pointer
// 1 pointer -> anchor ot the start index.
// 1 pointer -> explorer find the smallest value index.
function selectionSort(arr){
    for(let i=0; i<arr.length; i++){
        let smallest=i;
        for(let j=i; j<arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }
        console.log(arr, arr[smallest], arr[i]);
        if(arr[smallest] < arr[i]){
            let temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }
        console.log(arr);
        console.log("One loop completed");
    }
    return arr;
}

//Colt's solution:
function selectionSort1(arr){
    for(let i=0; i<arr.length; i++){
        let smallest=i;
        for(let j=i; j<arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j;
            }
        }
        console.log(arr, arr[smallest], arr[i]);
        if(i !== smallest){
            let temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }
        console.log(arr);
        console.log("One loop completed");
    }
    return arr;
}