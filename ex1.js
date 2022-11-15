let val,nb="0123456789.";
let adresse;

 do{
   val=false; 
    
adresse=prompt("Antre yon bon adres ip ");
   
    if(adresse.split('.').length==4){
        for(i in adresse){
            if(nb.includes(adresse[i])){
                val=true;
            }else{
                val=fasle;
                break;
            }
        }
          
    }else{
        val=false;
    }
    console.log(adresse);
}while(val===false);

let s=0,pot;

adresse=adresse.split('.');
for(i in adresse){
    for( e in adresse[i]){
        s+=Number(adresse[i][e]);
        
    }
     
}
pot=s*Number(adresse[0][0]);
 console.log("Donk pot ki ouvri a se : "+pot);