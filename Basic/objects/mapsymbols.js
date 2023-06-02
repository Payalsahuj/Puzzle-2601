function mapSymbols(N) {
    let symbol=["!","@","#","$","%","^","&","*"];
    let object={};
    for(let x=0;x<=symbol.length-1;x++){
        var name=symbol[x];
        object[name]=N;
        N=N+2;
    }
    for(var key in object){
        if(object[name]<=N){
            console.log(key+"-"+object[key]);
        
    }
}
}

mapSymbols(20)