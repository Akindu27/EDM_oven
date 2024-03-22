/* Big image display js */
function getImage(choice) {
	if (choice == 1) {
		var pic=document.getElementById("tomorrowland").src;
		document.getElementById("big-image").src =pic;
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Tomorrowland</h1><br>Tomorrowland was first held in 2005, on an idea of ​two brothers, Manu and Michiel Beers. Since then, it has become one of the most famous music festivals in the world. It has won numerous accolades and awards, including being voted five times in a row as 'best musical event of the year' at the International Dance Music Awards. It employs 80 people year-round for the organisation and 12,000 people during the event.";

	} else if (choice == 2) {
		var pic=document.getElementById("ultra").src;
		document.getElementById("big-image").src =pic;
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Ultra Music Festival</h1><br>Ultra Music Festival (UMF) is an annual outdoor electronic music festival that takes place during March in Miami, Florida, United States.The festival was founded in 1999 by Russell Faibisch and Alex Omes.Alongside the flagship event in Miami, Ultra has spawned a larger series of international franchises under the blanket branding Ultra Worldwide, which have included locations such as Croatia, South Africa, South Korea, Singapore, Mexico, Brazil, Colombia, and others.";

	} else if (choice == 3) {
		var pic=document.getElementById("neverland").src;
		document.getElementById("big-image").src =pic;
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Neverland</h1><br>Neverland Festival is an electronic dance music festival in Landgraaf, Netherlands. With elaborate stage design and costumed fairies roaming the grounds, this is not your typical festival.Curating a lineup of DJs and producers who know how to get the party started, the festival is about letting loose and having a good time.Taking its name from Peter Pan, the festival is an immersive experience aimed at pulling you out of your daily routine and into a land free of inhibitions. ";
	} else if (choice == 4) {
		var pic=document.getElementById("sunburn").src;
		document.getElementById("big-image").src =pic;
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>Sunburn</h1><br>Sunburn, a Percept Intellectual Property, is Asia's Premiere Electronic Dance Music (EDM) Festival, and is ranked amongst the world's biggest music festivals. Started in 2007 as a 3 day music festival in Goa, Sunburn has grown to become an aspirational lifestyle brand boasting an eclectic mix of music, entertainment, experiences and celebration that has seeded music tourism in India. Over the past decade, Sunburn has brought together renowned International and Indian artists to entertain hundreds of thousands of dance music lovers across the country and overseas, and positioned India as a prime dance festival destination to the world.";
	} else if (choice == 5) {
		var pic=document.getElementById("AMF").src;
		document.getElementById("big-image").src =pic;
		document.getElementById("gallery-display").style.display = "block";
		document.getElementById("bigImage-description").innerHTML = "<h1>AMF</h1><br>The Amsterdam Music Festival (AMF) is an electronic dance music (EDM) event that takes place during the Amsterdam Dance Event mid-October in Amsterdam, Netherlands. Since the second edition in 2014, the main event has taken place in the Johan Cruijff Arena. In 2015 and 2016 the event was a multiple day EDM-event.<br>During the AMF, the DJ Mag Top 100 DJs is announced and several prizes are awarded, among which the award for the number one DJ in the world.The music that is played is mostly house and dance music; other genres that are also played at the event include techno, trance and hardstyle.";
	} else {

	}
}


/* destinations js */
function CheckDestination(form) {
	var selected = destinations[destinations.selectedIndex].value;
	if (selected == "option1") {
		getImage(1);
	} else if (selected == "option2") {
		getImage(2);
	} else if (selected == "option3") {
		getImage(3);
	} else if (selected == "option4") {
		getImage(4);
	} else if (selected == "option5") {
		getImage(5);
	} else {

	}
}

/* background colour change js */
function bgcolor(radio) {
	var selected = radio.value;

	if (selected == "color1") {
		document.body.style.backgroundColor = "#004953";
	} else if (selected == "color2") {
		document.body.style.backgroundColor = "#696969";
	} else if (selected == "color3") {
		document.body.style.backgroundColor = "#3e526e";
	} else {

	}

}

/* font colour change js */
function changeColor(colour) {
	var elements = document.getElementsByClassName('container');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color = colour;
	}
}
function fontcolor(form) {
	var selected = fontColor[fontColor.selectedIndex].value;

	if (selected == "color1") {
		changeColor("#ab5454");
	} else if (selected == "color2") {
		changeColor("#3865e0");
	} else if (selected == "color3") {
		changeColor("#77188c");
	} else if (selected == "color4") {
		changeColor("#ff0000");
	} else if (selected == "color5") {
		changeColor("#18758c");
	} else {

	}
}

/* reset button js */
function reset1() {
	var elements = document.getElementsByClassName('container');
	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color = "black";
	}
	document.body.style.backgroundColor = "#BFDAF7";
	document.getElementById("gallery-display").style.display = "none";
	document.getElementById("bigImage-description").style.fontSize="20px";
}
