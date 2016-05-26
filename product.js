var productArray=[
{ 
	name: "Standard kitten",
	description: "A plain ol kitten, in a plain ol box",
	price: "$100",
	url:"images/kitten1.jpg"
},
{ 
	name: "Squashed kitten",
	description: "A kitten who can fit into small places",
	price: "$110",
	url: "images/kitten2.jpg"


},
{ 
	name:"One dozen kittens",
	description: "A dozen kittens conveniently packed into one box",
	price: "$1000",
	url: "images/kitten3.jpg"


},{ 
	name: "Valentine's kitten",
	description: "A kitten in a box made for your special someone",
	price: "$150",
	url: "images/kitten4.jpg"


},{ 
	name: "Make your own kitten kit",
	description: "Two fully grown kitten-makers, so you can make your own custom kittens",
	price: "$250",
	url: "images/kitten5.jpg"


},{ 
	name: "Kitten triple pack",
	description: "Three kittens, one box",
	price: "$250",
	url: "images/kitten6.jpg"


},{ 
	name: "Frightened kitten",
	description: "A kitten that has been spooked, for added fun",
	price: "$125",
	url: "images/kitten7.jpg"


},{ 
	name: "Kitten + litter box combo",
	description: "Litter box included for maximum convenience",
	price: "$120",
	url: "images/kitten8.jpg"


}]


for(i=0; i< productArray.length; i++){
	var card=document.getElementById("products");
	console.log(card);
	card.innerHTML += "<div class='product'><div class='productName'>" + productArray[i].name + "</div>"
	 +  "<div class='productImage'><img src='" + productArray[i].url + "'></div>" + "<div class='description'>" 
	 + productArray[i].description + "</div>"+"<div class='price'> Price: " + productArray[i].price+ "</div></div>" ;
}

