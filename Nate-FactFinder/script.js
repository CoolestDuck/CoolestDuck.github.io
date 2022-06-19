var FactOne = "The 100-acre (40-hectare) San Diego Zoo is home to over 3,700 rare and endangered animals representing more than 650 species and subspecies, and a prominent botanical collection with more than 700,000 exotic plants. It is located just north of downtown San Diego in Balboa Park."

var FactTwo = "The dolphin's sense of touch is also well-developed, with free nerve endings densely packed in the skin, especially around the snout, pectoral fins and genital area. However, dolphins lack an olfactory nerve and lobes, and thus are believed to have no sense of smell."

var FactThree = "The rings of blue, black, yellow, red and green, which make up one of the most recognized symbols in the world, traditionally represent the five different areas of the world involved in the Olympics (North and South America are considered one area, along with Africa, Australia, Asia and Europe)."

var FactFour ="William Caxton was the first Englishman to learn to use a printing press. The Recuyell of the Historyes of Troye was his first printed book, and the first book printed anywhere in English. It was produced in 1473 on the Continent, in either Bruges or Ghent."


var FactFour ="G8 stands for Group of Eight and is made up of leaders from Canada, France, Germany, Italy, Japan, Russia, the UK and the United States of America. The leaders of these countries take it in turns to be president of the G8, with the leader of the host country acting as the president that year."
var FactFive = "January: Later, Pompilius added another month to the beginning of the year and named it January after Janus, the God of beginnings and endings. In 1582, Pope Gregory adjusted the calendar, so most western nations began celebrating the start of the year on January 1."

var f =document.querySelector("#factsChoices");
f.a.addEventListener("click", factOneChange);
f.b.addEventListener("click", factTwoChange);
f.c.addEventListener("click", factThreeChange);
f.d.addEventListener("click", factFourChange);
f.e.addEventListener("click", factFiveChange);



function factOneChange(){
	document.getElementById("factDisplay").innerHTML = FactOne;
	document.getElementById("factDisplay").innerHTML += '<p><img id = "Zoo" src = "images/Zoo.png" alt = "Zoo"></p>';
	document.getElementById("factDisplay").style.color = "#ECE4B7";
	document.getElementById("factDisplay").style.backgroundColor = "#FC9F5B";
	document.getElementById("factDisplay").style.border = "5px solid #FBD1A2" ;
	f.a.style.backgroundColor = "#7DCFB6";
	f.b.style.backgroundColor = "#7DCFB6";
	f.c.style.backgroundColor = "#7DCFB6";
	f.d.style.backgroundColor = "#7DCFB6";
	f.e.style.backgroundColor = "#7DCFB6";
	f.style.border = "5px solid #33CA7F";
}
function factTwoChange(){
	document.getElementById("factDisplay").innerHTML = FactTwo;
	document.getElementById("factDisplay").innerHTML += '<p><img id = "Dolphins" src = "images/Dolphins.jpeg" alt = "Dolphins"></p>';
	document.getElementById("factDisplay").style.color = "#E2DBBE";
	document.getElementById("factDisplay").style.backgroundColor = "#769FB6";
	document.getElementById("factDisplay").style.border = "5px solid #D5D6AA" ;
	f.a.style.backgroundColor = "#9DBBAE";
	f.b.style.backgroundColor = "#9DBBAE";
	f.c.style.backgroundColor = "#9DBBAE";
	f.d.style.backgroundColor = "#9DBBAE";
	f.e.style.backgroundColor = "#9DBBAE";
	f.style.border = "5px solid #188FA7";
}
function factThreeChange(){
	document.getElementById("factDisplay").innerHTML = FactThree;
	document.getElementById("factDisplay").innerHTML += '<p><img id = "Olympics" src = "images/Olympics.jpeg" alt = "Olympic Symbol"></p>';
	document.getElementById("factDisplay").style.color = "#466362";
	document.getElementById("factDisplay").style.backgroundColor = "#938581";
	document.getElementById("factDisplay").style.border = "5px solid #7E6551" ;
	f.a.style.backgroundColor = "#8896AB";
	f.b.style.backgroundColor = "#8896AB";
	f.c.style.backgroundColor = "#8896AB";
	f.d.style.backgroundColor = "#8896AB";
	f.e.style.backgroundColor = "#8896AB";
	f.style.border = "5px solid #C5D5E4";
	
}
function factFourChange(){
	document.getElementById("factDisplay").innerHTML = FactFour;
	document.getElementById("factDisplay").innerHTML += '<p><img id = "canadaFlag" src = "images/Flag.jpeg" alt = "Canada Flag"></p>';
	document.getElementById("factDisplay").style.color = "#AEECEF";
	document.getElementById("factDisplay").style.backgroundColor = "#119DA4";
	document.getElementById("factDisplay").style.border = "5px solid #6D9DC5" ;
	f.a.style.backgroundColor = "#80DED9";
	f.b.style.backgroundColor = "#80DED9";
	f.c.style.backgroundColor = "#80DED9";
	f.d.style.backgroundColor = "#80DED9";
	f.e.style.backgroundColor = "#80DED9";
	f.style.border = "5px solid #3066BE";
	
}
function factFiveChange(){
	
	document.getElementById("factDisplay").innerHTML = FactFive;
	document.getElementById("factDisplay").innerHTML += '<p><img id = "January" src = "images/January.png" alt ="January on the Calender"></p>';
	document.getElementById("factDisplay").style.color = "#A30015";
	document.getElementById("factDisplay").style.backgroundColor = "#B191FF";
	document.getElementById("factDisplay").style.border = "5px solid #D664BE" ;
	f.a.style.backgroundColor = "#BD2D87";
	f.b.style.backgroundColor = "#BD2D87";
	f.c.style.backgroundColor = "#BD2D87";
	f.d.style.backgroundColor = "#BD2D87";
	f.e.style.backgroundColor = "#BD2D87";
	f.style.border = "5px solid #DF99F0";
	
}

