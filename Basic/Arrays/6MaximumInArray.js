function maximumInArray(N,arr){
    let y=-Infinity;
       for(let x=0;x<=N-1;x++){
           if(arr[x]>y){
               y=arr[x];
   }
       }
       console.log(y);
   }

   maximumInArray(6,[5,2,5,8,2,9])