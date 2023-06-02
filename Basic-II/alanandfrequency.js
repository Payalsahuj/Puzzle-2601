

function alanandfrequency(N,str){
    let obj={};
    let str1="abcdefghijklmnopqrstuvwxyz";
    for(let y=0;y<=str1.length-1;y++){
    for(let x=0;x<=N-1;x++){
        if(str1[y]==str[x]){
        if(obj[str[x]]==undefined){
            obj[str[x]]=1;
        }
        else{
            obj[str[x]]++;
        }
        }
    }
        
    }
    for(let key in obj){
        console.log(key+"-"+obj[key])
    }
    
}

alanandfrequency(4,aman)