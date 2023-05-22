function printHorizontalArray(N,arr){
    let bag="";
    for(let x=0;x<=N-1;x++){
        bag+=arr[x]+" ";
    }
       console.log(bag);
}

printHorizontalArray(4,[1,2,3,4])