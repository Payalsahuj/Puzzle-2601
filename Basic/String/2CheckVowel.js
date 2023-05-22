function checkVowel(N, str) {
    let count=0;
    for(let x=0;x<=N-1;x++){
        if(str[x]=="a" || str[x]=="e" || str[x]=="i" || str[x]=="o" || str[x]=="u"){
           count++;
        }
    }
        if(count>=1){
            console.log("true");
        }
        else{
            console.log("false");
        }
  
}
checkVowel(5,"payal")