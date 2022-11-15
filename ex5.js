let chen="5 45 123 12",p=1,s;
chen=chen.split(' ');
console.log()
for(i in chen){
    s=0
   for(e in chen[i]){
    s+=Number(chen[i][e]);
   }
   p*=s;
}

console.log(chen+" ap bay total : "+p);