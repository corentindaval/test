const bouton=document.getElementById("validation");
const boutontest=document.getElementById("test");
const dnom=document.getElementById("nom");
const dprenom=document.getElementById("prenom");
const dadresse=document.getElementById("adresse");
let tabaderant=[];

class aderant{
constructor(nom,prenom,adresse){
this.nom=nom;
this.prenom=prenom;
this.adresse=adresse;
}
	
}

	bouton.addEventListener('click',function() {
		let nomaderant=dnom.value;
		let prenomaderant=dprenom.value;
		let adresseaderant=dadresse.value;
		let nvaderant=new aderant(nomaderant,prenomaderant,adresseaderant);
	    tabaderant.push(nvaderant);	
});

	boutontest.addEventListener('click',function() {
		let tab = document.getElementById("affichage");
		const defcol="<tr><td>nom</td><td>prenom</td><td>adresse</td></tr>";
		let buildtab="";
		for(let ader of tabaderant){
			let ligneaderant="<tr><td>"+ader.nom+"</td><td>"+ader.prenom+"</td><td>"+ader.adresse+"</td></tr>";
			buildtab=buildtab+ligneaderant;
		}
		let buildf=defcol+buildtab;
		tab.innerHTML=buildf;
});