function reverse(str) {
    var chars = str.split('')
    var result = ''
    for(i = chars.length-1; i>=0; i=i+(-1)){
        result = result + chars[i]
    }
    console.log(result)
}

reverse('asdfg')