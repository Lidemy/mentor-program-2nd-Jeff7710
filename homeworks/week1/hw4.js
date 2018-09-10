function printFactor(n) {
    var result = []
    for(i=1; i<=n; i++){
        if((n % i)===0){
            result.push(i)
        }
    }
    console.log(result)
}

printFactor(10)