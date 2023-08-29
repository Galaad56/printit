const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


const longueur = slides.length
let index=0
const index_fin=longueur-1


/* rajouter un event listener*/

let flecheGauche = document.getElementById("fleche_gauche")
flecheGauche.addEventListener("click", function() {

	  console.log(index)
		if (index>=1){
			
			bulletNonActive()
			index--
			bulletActive()

		}else if(index===0){
			
			bulletNonActive()
			index=index_fin
			bulletActive()
		}
	    changerImage ()

})

let flecheDroite = document.getElementById("fleche_droite")
flecheDroite.addEventListener("click", function() {
	  
		console.log(index)
		if (index<index_fin){

			bulletNonActive()
			index++
			bulletActive()

		}else if(index===index_fin){

			bulletNonActive()
			index=0
			bulletActive()
		}
		changerImage()
})


/*gestion des bullet points*/

creerBullet()

  /*fonctions*/

  function creerBullet () {

	const bulletContainer = document.querySelector(".dots")
	console.log("La longueur du tableau est :", longueur)

	for (let i = 0; i < longueur; i++) {
		const bullet = document.createElement('p')
		bullet.id='bullet_'+i
		bullet.classList.add('dot')
		bulletContainer.appendChild(bullet)
  	}
  	let bullet_active=document.getElementById("bullet_0")
 	bullet_active.classList.add("dot_selected")
  }

  function changerImage () {
	let imagefond = document.querySelector(".banner-img")
	imagefond.src="./assets/images/slideshow/"+ slides[index].image

	let textbanner = document.querySelector("#banner p")
	textbanner.innerHTML=slides[index].tagLine
  }

  function bulletActive () {
	let bullet_active=document.getElementById("bullet_"+index)
	bullet_active.classList.add("dot_selected")
  }

  function bulletNonActive () {
	let bullet_nonactive=document.getElementById("bullet_"+index)
	bullet_nonactive.classList.remove("dot_selected")
  }