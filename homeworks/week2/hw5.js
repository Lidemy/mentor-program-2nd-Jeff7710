function add(a, b) {
  const aa = a.split('').reverse()
  const bb = b.split('').reverse()
  const length = Math.max(aa.length, bb.length)
  let ans = ['']
  let tem =0 
  
  for(let i=0; i<length; i++){   
    ans[i] = Number(aa[i] || 0) + Number(bb[i] || 0) + tem
    tem = 0
    if(ans[i]>=10){
        tem = 1
        ans[i] = ans[i] - 10
    }
    if(tem > 0){
        ans.push(tem)
    }
  }
  return ans.reverse().join('')
}

module.exports = add;