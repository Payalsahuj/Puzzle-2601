function mapCharAndSum(N,K,str) {
    var alpha="abcdefghijklmnopqrstuvwxyz";
    var obj={};
    for (var i=0;i<=alpha.length-1;i++){
        var name=alpha[i];
            obj[name]=N+i;
    }
    let sum=0;
    for(let j=0;j<=str.length-1;j++){
        sum +=obj[str[j]];
    }
    console.log(sum);
}

mapCharAndSum(30,3,"abc")