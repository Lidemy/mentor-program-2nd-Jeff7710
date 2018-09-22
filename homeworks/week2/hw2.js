function alphaSwap(str) {
    var result = ''
    for(var i=0; i<=str.length-1; i++){
        if(str[i]>='A' && str[i] <= 'Z'){
            result = result + str[i].toLowerCase()
        }else if(str[i]>='a' && str[i] <= 'z'){
            result = result + str[i].toUpperCase()
        }else{
            result = result + str[i]
        }
    }
    return result
}

// console.log(alphaSwap('a!!!sdASFG'))

module.exports = alphaSwap

