
function capitalize(str){
    var a = str.split('')[0]                         //抓字串的第一個字
    if (a >='a' && a <= 'z'){                        //檢查a是否為小寫；若是則修改
        return str.replace(a, a.toUpperCase())       //用取代的方式修改成大寫
    }else{                                           //否則就不管它
        return str
    }
}

console.log(capitalize('Jeff'))
console.log(capitalize('jeff'))
console.log(capitalize(';eff'))