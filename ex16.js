let alph="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let number='1234567890';
let sekans="<1T >7H >3C <5Y >13J <2C <5W >4A",chen=[],idx;
sekans=sekans.split(' ');
for(e in sekans){
  let d=[];
    for(i in sekans[e]){
      if(number.includes(sekans[e][i])){
        d.push(sekans[e][i]); 
      }
      if(alph.includes(sekans[e][i])){
        idx=Number(alph.indexOf(sekans[e][i]));
      }
    }
    d=Number(d.join(''));
    if(sekans[e][0]=='>'){
      chen.push(alph[idx+d]);
    }else{
        chen.push(alph[idx-d]);
    }
}
chen=chen.join('');
console.log("sekans sa "+sekans+" bay : "+chen);