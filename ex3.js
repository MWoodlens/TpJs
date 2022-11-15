let nom=prompt("Antre non konple w");
let aNom=nom;
nom=nom.split(' ');
for(i in nom){
    nom[i]=nom[i][0].toUpperCase()+nom[i].slice(1).toLowerCase();
}
nom=nom.join(' ');
console.log("nom avan : "+aNom);
console.log("nom apre : "+nom);