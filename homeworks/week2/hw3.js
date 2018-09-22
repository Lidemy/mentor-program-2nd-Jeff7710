function isPrime(n) {
    var result = []
    for(var i=1; i<=n; i++){
        if((n % i) === 0){
            result.push(i)
        }
    }
    if(result.length === 2){
        return true
    } else {
        return false
    }
}

module.exports = isPrime


// console.log(isPrime(1))