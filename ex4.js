let a=2,b=3;
let minI=1,maxI=20;
let multipA=[],multipB=[],multipAB=[],multipNaNb=[];
for(let i=minI;i<=maxI;i++){
    if(i%a==0 && i%b!=0){
        multipA.push(i);
    }else
    if(i%a!=0 && i%b==0){
        multipB.push(i);
    }else
    if(i%a==0 && i%b==0){
        multipAB.push(i);
    }else{
        multipNaNb.push(i);
    }
}
console.log("Miltip "+a+" men ki pa miltip "+b+" : "+multipA.join(',')+" -> total nonb : "+multipA.length);
console.log("Miltip "+b+" men ki pa miltip "+a+" : "+multipB.join(',')+"-> total nonb : "+multipB.length);
console.log("Miltip "+a+" ak "+b+" : "+multipAB.join(',')+" -> total nonb : "+multipAB.length);
console.log("Ki pa miltip ni "+a+" ni "+b+" : "+multipNaNb.join(',')+" -> total nonb : "+multipNaNb.length);

