let vwayel="aeiouy";
chen="Bonjour le monde";
console.log('chen avan : '+chen);
chen=chen.split('');
for(i in chen){
    if(vwayel.includes(chen[i])){
        chen[i-1]="*";
    }
}
chen=chen.join('');
console.log("chen apre : "+chen);