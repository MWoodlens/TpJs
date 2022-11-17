let sekans=[0,1,2,3,4];
let N=3, temp1,temp2,avan,sekansr;

console.log("Sekans lan : "+sekans);
for(i in sekans){
    avan=sekans.join(',');
    if(i==0){
        sekans=sekans.reverse();
        console.log("Iterasyon  "+(Number(i)+1)+" sekans avan : "+avan+" sekans apre : " +sekans);
        
    }else{
        
       temp1=sekans.join('');
       temp2=temp1.substring(sekans.length-(Number(i)));
       temp1=temp1.substring(0,sekans.length-(Number(i)));
       temp1=temp1.split('').reverse().join('');
       temp1=temp1+""+temp2;
       sekans=temp1.split('');
       console.log("Iterasyon  "+(Number(i)+1)+" sekans avan : "+avan+" sekans apre : " +sekans);
       
    }
    if(i==sekans.length-2)
            break;
    
}
console.log("Apre tout ranveseman eleman "+N+" nan pozisyon "+sekans.indexOf(N.toString()));