a = [1,2,4,5]

for(let i = 0;i<a.length;i++){
    if(a[i+1]!==a[i]+1){
        console.log(a[i]+1)
    }
}