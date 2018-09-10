function join(str, concatStr) {
    var result=''
    for(i = 0; i <= str.length-2; i++){
        result = result +str[i] + concatStr
    }
    return result + str[str.length-1]
}

function repeat(str, times) {
    var result = ''
    for(i = 1;i<=times;i++){
    result = result + str
    }
    return result
}

// var str = ["a","b","c"]
// var concatStr = "!"
// var times = 3
// console.log(join(str, concatStr))
// console.log(repeat(str, times))