function stars(n) {
    var result = []
    var a = ''
    for(var i=1; i<=n; i++){
        a = a + '*'
        result.push(a)
    }
    return result
}


// console.log(stars(1))
// console.log(stars(8))

module.exports = stars;



