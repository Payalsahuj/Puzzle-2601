function vowelAndConsonantCount(N, str) {
    let count1=0,count2=0;
    for(let x=0;x<=N-1;x++){
        if(str[x]=="a" || str[x]=="e" || str[x]=="i" || str[x]=="o" || str[x]=="u"){
          count1++;  
        }
        else{
            count2++;
        }
    }
    console.log(count1,count2);
    
  }

  vowelAndConsonantCount(8,"gxgagdms")