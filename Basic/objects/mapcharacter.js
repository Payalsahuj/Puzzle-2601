function mapChar(N) {

    var alpha="abcdefghijklmnopqrstuvwxyz";
   var obj={};
   for (var i=0;i<=N-1;i++){
       var name=alpha[i];
           obj[name]=1+i;
   }
   for(var key in obj){
       if(obj[key]<=N){
           console.log(key+"-"+obj[key]);
       }
   
}
}


mapChar(5)