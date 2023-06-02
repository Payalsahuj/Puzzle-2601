function mapNumbers(N,K){
    
    var obj={};
for(let x=1;x<=N;x++){
     var name= x;
    obj[name]=K;
    K++;
}
for(var key in obj){
     if(obj[key]<=K){
    console.log(key+"-"+obj[key]);
    }
}
}

mapNumbers(5,10)