const fibonacci = function (x) {
    let fibonacciArray = [0,1];
    if (x < 0)
    {
         return 'OOPS';

    } else 
    if (typeof x == 'string') {

    converted = parseInt(x, 10);

    if (isNaN(converted)) {
        return "NaN";
    } else

    {
    for (i = 2; i < converted +1; i++)
    {
        let element = fibonacciArray[i-1] + fibonacciArray[i-2]
     fibonacciArray.push(element);
        
    }

    return fibonacciArray[fibonacciArray.length - 1];
}

} else {
    for (i = 2; i < x+1; i++)
    {
        let element =fibonacciArray[i-1] + fibonacciArray[i-2]
     fibonacciArray.push(element);
        
    }

    return fibonacciArray[fibonacciArray.length - 1];
}

}
   


console.log(fibonacci('1'));

module.exports = fibonacci
