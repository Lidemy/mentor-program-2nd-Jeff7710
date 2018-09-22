function isPalindromes(str) {
    for(var i=1; i<=str.length-1; i++){
        if(str[i]===str[str.length-1-i]){
            return true
        }else{
            return false
        }
    }
}

module.exports = isPalindromes