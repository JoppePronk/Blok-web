// JavaScript Document


var deButton = document.querySelector("nav button");
var deNav = document.querySelector("nav");

deButton.addEventListener("click", toggleMenu);

function toggleMenu(event) {
  deNav.classList.toggle("toonMenu");
}



// Bron:


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


// Bron:




// shopping cart


var DeEersteButton = document.querySelector ("section:nth-of-type(3) div button.shop");
var DeTweedeButton = document.querySelector ("section:nth-of-type(3) div button.shop");
var DeDerdeButton = document.querySelector ("section:nth-of-type(3) div button.shop");


 
DeEersteButton.addEventListener("click", addToCart);
DeTweedeButton.addEventListener("click", addToCart);
DeDerdeButton.addEventListener("click", addToCart);

function addToCart(){
 var deShoppingCart = document.querySelector("header a:last-of-type span");
  
  var deHuidigeWaarde = parseInt(deShoppingCart.textContent);
  
  
  
  var deNieuweWaarde = deHuidigeWaarde +1;
  
  console.log(deNieuweWaarde);
  
  deShoppingCart.textContent = deNieuweWaarde;
}

// Bron:





// Banner verandert
