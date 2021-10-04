// JavaScript Document


var deButton = document.querySelector("nav button");
var deNav = document.querySelector("nav");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
}



// Bron: Sanne 't Hooft











// fotoalbum






console.log('bladeren js');

// data: het foto boek
var fotos = ['Legacy_HP_Banner_1500x.jpg','Mestari_HP_Banner_1500x.jpg', '1440x800_1500x.jpg'];

// a. DOM elementen die een rol spelen in dit script
var fotoImg = document.querySelector('#foto');
var huidigNrSpan = document.querySelector('#huidigeFotoNr');
var thumbnailsUl = document.querySelector('#thumbnails');
var laatsteNrSpan = document.querySelector('#laatsteFotoNr');
var vooruitButton = document.querySelector('#vooruit');
var achteruitButton = document.querySelector('#terug');

var huidigFotoNr = 0 ; // initieel op 0
toonThumbnails() ;
toonHuidigeFoto();	

function toonHuidigeFoto() {
	console.log('bladeren ' + huidigFotoNr);
	fotoImg.src = 'images/' + fotos[huidigFotoNr];
	huidigNrSpan.textContent = huidigFotoNr ;
	laatsteNrSpan.textContent = fotos.length - 1;

	document.querySelectorAll('#thumbnails li').forEach( (thumbLi) => thumbLi.classList.remove('huidig'));
	document.querySelector(`#thumbnails li:nth-of-type(${huidigFotoNr+1})`).classList.add('huidig');
}

function toonThumbnails() {
	
	fotos.forEach( (foto) => {
		thumbnailsUl.innerHTML = thumbnailsUl.innerHTML + `<li><img src="images/${foto}"</li>` ;
	});
}

// c. eventHandlers: twee  bladerfuncties voor heen en weer bladeren

function bladerVooruit() {
	huidigFotoNr = huidigFotoNr + 1 ;
	if ( huidigFotoNr > fotos.length -1 ) { // voorbij het einde 
		huidigFotoNr = 0 ; // terug naar begin
	}
	toonHuidigeFoto();	
}

function bladerAchteruit() {
	huidigFotoNr = huidigFotoNr - 1 ;
	if ( huidigFotoNr < 1 ) { // voorbij het begin 
		huidigFotoNr = fotos.length -1 ; // terug naar einde
	}
	toonHuidigeFoto();
}

// d. eventlisteners: voor de heen en weer knoppen die de bladerfuncties aanroepen
vooruitButton.addEventListener('click' , bladerVooruit );
achteruitButton.addEventListener('click' , bladerAchteruit );


// Bron: Fons van Kesteren : 





/****************************/
/* CODE VOOR DE KOOPKNOPPEN */
/****************************/


/* alle koopknoppen opzoeken in de HTML */
/* omdat er meer buttons geselecteerd moeten worden, wordt querySelectorAll gebruikt (en niet querySelector) */
/* het gevonden lijstje met koopknoppen (een array) in de variabele 'addToCartButtons' opslaan */

var addToCartButtons = document.querySelectorAll("button.shop");


/* elke koopknop laten luisteren naar een klik */
/* na een klik de functie 'updateShoppingCart' uitvoeren */
for (i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", updateShoppingCart);
  }
  
  /* als er op een koopknop is gedrukt - het winkelwagentje updaten */
  function updateShoppingCart() {
	/* het getal (de span) in de winkelwagen-link in de nav opzoeken */
	/* die span in de variabele 'shoppingCartAmount' opslaan */
	let shoppingCart = document.querySelector(".shopping-cart");
	let shoppingCartAmount = shoppingCart.querySelector("span");
	
	/* het huidige aantal schoenen in  de shopping cart bepalen */
	let currentAmount = shoppingCartAmount.innerHTML;
	/* dat is een string - dus even omzetten naar een getal */
	currentAmount = parseInt(currentAmount);
	
	/* het nieuwe aantal schoenen berekenen */
	let newAmount = currentAmount + 1;
	
	/* tenslotte het nieuwe aantal schoenen in de HTML zetten */
	shoppingCartAmount.innerHTML = newAmount;
	
	/* de class updated wordt toegevoegd aan de winkelwagen-link */
	/* met CSS wordt dan een animatie geactiveerd */
	shoppingCart.classList.add("updated");
	
	/* om de animatie bij een volgende klik op een koopknop weer af te spelen moet de class weer verwijderd worden als de animatie klaar is */
	/* dat kun je doen met het animationend event */
	/* dat event gaat af als de animatie klaar is met afspelen */
	/* je kunt de shopping cart-link laten luisteren naar het einde van de animatie */
	shoppingCart.addEventListener("animationend", function(event){
	  /* dan kun je in de functie de class updated weer verwijderen */
	  shoppingCart.classList.remove("updated");
	}, { once: true });
  }

  // Bron: Sanne 't Hooft - https://codepen.io/shooft/pen/oNwGwgN 