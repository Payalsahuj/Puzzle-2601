function reverseArrayTraversal(n, arr){
    let bag="";
    for(let x=n-1;x>=0;x--){
        bag+=arr[x]+" ";
        
    }
    console.log(bag);
}

reverseArrayTraversal(6, [1,2,3,4,5,6])