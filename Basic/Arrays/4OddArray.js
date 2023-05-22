function oddArray(n, arr){
    for(let x=0;x<=arr.length-1;x++){
       if(arr[x]%2!=0){
           console.log(arr[x]);
       }
   }
}
oddArray(6,[1,2,3,4,5,6])