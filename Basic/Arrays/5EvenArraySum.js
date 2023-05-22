function evenArraySum(n, arr){
    let sum=0;
for(let x=0;x<=n-1;x++){
    if(arr[x]%2==0){
    sum = sum+ arr[x];
    }
}
console.log(sum);

}

evenArraySum(7,[1,2,3,4,5,6,7])