// Bubble Sort
// Example: bubbleSort([37,29,8,45,12,88,-3])

// 1. NOT refactored Bubble sort
function bubbleSort(arr){
    // first loop: use to decide how many loop is needed.
    for(let i=0; i<arr.length; i++){
        // second loop: compare current index, and next index value.
        for(let j=0; j<arr.length; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                  arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("One loop completed");
    }
    return arr;
}

// 2. Refactored Bubble Sort
// Example: bubbleSortRefactored([37,29,8,45,12,88,-3])
function bubbleSortRefactored(arr){
    for(let i=arr.length; i>0; i--){
        for(let j=0; j<i-1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                  arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        console.log("One loop completed");
    }
    return arr;
}