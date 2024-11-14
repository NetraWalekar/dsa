a = [54,23,7,4,67,8,645,54,65]
biggestElement = 0;
for(let i = 0; i<=a.length;i++){
    if(a[i]>biggestElement){
       biggestElement = a[i] ;
    }
}

console.log(biggestElement)