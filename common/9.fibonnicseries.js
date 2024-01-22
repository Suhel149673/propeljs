function fibonacci(n){
    let fibonacciseries=[0,1]
    for(let i=2 ;i<n;i++){
        let nextnumber=fibonacciseries[i-1]+fibonacciseries[i-2]
        fibonacciseries.push(nextnumber);
    }
    return fibonacciseries
}

const numberOfTerms = 10;
const fibonacciSeries = fibonacci(numberOfTerms);

console.log(`Fibonacci series with ${numberOfTerms} terms:`, fibonacciSeries);