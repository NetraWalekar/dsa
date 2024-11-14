a = [3,5,2,56,34,74,5]

let isDuplicate = false;

for(let i = 0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        if(a[i]===a[j]){
            isDuplicate = true;
            break;
        }
    }
    if(isDuplicate) break;
}

console.log(isDuplicate)