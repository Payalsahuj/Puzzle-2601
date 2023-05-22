function checkPalindrome(N, str) {
    let bag="";
    for(let x=N-1;x>=0;x--){
        bag +=str[x];
    }
  
    if(bag==str){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
  
}
checkPalindrome(7,"racecar")