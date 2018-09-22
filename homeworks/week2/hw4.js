function isPalindromes(str) {
    for(var i=0; i<=str.length-1; i++){
        if(str[i]===str[str.length-1-i]){
            return true
        }else{
            return false
        }
    }
}

module.exports = isPalindromes