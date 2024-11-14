let a = [1,2,3,4,5]
b =[]

function reverse(a){
    for(let i = a.length-1;i>=0;i--){
       b.push(a[i])
    }
    return b;
}

console.log(reverse(a))