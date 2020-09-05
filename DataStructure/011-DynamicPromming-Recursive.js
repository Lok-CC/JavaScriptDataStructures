// ************************* Dynamic Programming *********************************


// Recursive - Fibonnaci Sequence
function fib_recursive(n){
    if(n <= 2) return 1;
    return fib_recursive(n-1) + fib_recursive(n-2);
}

// Dynamic Programming - MEMOIZATION
function fib_memo(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    let res = fib_memo(n-1, memo) + fib_memo(n-2, memo);
    memo[n] = res;
    return res;
}

// Refactored: - MEMOIZATION
function fib_memo1(n, memo1=[undefined, 1, 1]){
    if(memo1[n] !== undefined) return memo1[n];
    let res = fib_memo1(n-1, memo1) + fib_memo1(n-2, memo1);
    memo1[n] = res;
    return res;
}

// Refactored - Tabulation (Better Space Complexity)
function fib_table(n){
    if(n <= 2) return 1;
    let fibNums = [0,1,1];
    for(let i=3; i<=n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n]

}