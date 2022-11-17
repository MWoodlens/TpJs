let tbNonb=[4,1,8,10,11,13,20,2,8,18,3];
let min=tbNonb[0];
let max=tbNonb[0];
for(e in tbNonb){
    if(tbNonb[e]<min){
        min=tbNonb[e];
    }

    if(tbNonb[e]>max){
        max=tbNonb[e];
    }
}
console.log("Tablo nonb : "+tbNonb);
console.log("pi piti nonb tablo a se : "+min);
console.log("pi gran nonb tablo a se : "+max);