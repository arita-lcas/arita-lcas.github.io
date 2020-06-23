


function replaceSrc(elem, src) {
	if (document.getElementById(elem).src != src){
		document.getElementById(elem).src = src;
	}
}


function showPopup(event) {
	let projectId = 'popup-project' + realNumber(event.target.id);
	let project = document.getElementById(projectId);

	switch(realNumber(event.target.id)) {
		case 1:
			replaceSrc("project1-iframe", "https://www.youtube.com/embed/SQo25ouq3Q4");
			break;
		case 2:
			replaceSrc("project2-iframe", "https://www.youtube.com/embed/fe4Cnj6lMVY");
			replaceSrc("project2-img", "images/bates-motel.jpg");
			break;
	    case 3:
	    	replaceSrc("project3-iframe", "https://www.youtube.com/embed/8qrXrWXwcFg");
		  	break;
	    case 4:
	    	replaceSrc("project4-img", "images/rita-silva-gif.gif");
	    	break;
	    case 5:
	    	replaceSrc("project5-img1", "images/cookies-packaging-1.jpg");
	    	replaceSrc("project5-img2", "images/cookies-packaging-2.jpg");
	    	break;
	    case 6:
	    	replaceSrc("project6-img1", "images/spacecamp1.jpg");
	    	replaceSrc("project6-img2", "images/spacecamp2.jpg");
	    	break;
	    case 7:
	    	replaceSrc("project7-img", "images/adoption-poster.jpg");
	    	break;
	    case 8:
	    	replaceSrc("project8-img", "images/aurora.jpg");
	    	break;
	    case 9:
	    	replaceSrc("project9-img", "images/anne-green-gables.jpg");
	    	break;
	    case 10:
	    	replaceSrc("project10-img1", "images/viriato1.jpg");
	    	replaceSrc("project10-img2", "images/viriato2.jpg");
	    	replaceSrc("project10-img3", "images/viriato3.jpg");
	    	replaceSrc("project10-img4", "images/viriato4.jpg");
	    	replaceSrc("project10-img5", "images/viriato5.jpg");
	    	replaceSrc("project10-img6", "images/viriato6.jpg");
	    	replaceSrc("project10-img7", "images/viriato7.jpg");
	    	replaceSrc("project10-img8", "images/viriato8.jpg");
	    	replaceSrc("project10-img9", "images/viriato9.jpg");
	    	break;
	    case 11:
	    	replaceSrc("project11-img1", "images/boardgame1.jpg");
	    	replaceSrc("project11-img2", "images/boardgame2.jpg");
	    	replaceSrc("project11-img3", "images/boardgame3.jpg");
	    	replaceSrc("project11-img4", "images/boardgame4.jpg");
	    	replaceSrc("project11-img5", "images/boardgame5.jpg");
	    	replaceSrc("project11-img6", "images/boardgame6.jpg");
	    	replaceSrc("project11-img7", "images/boardgame7.jpg");
	    	replaceSrc("project11-img8", "images/boardgame8.jpg");
	    	replaceSrc("project11-img9", "images/boardgame9.jpg");
	    	replaceSrc("project11-img10", "images/boardgame10.jpg");
	    	replaceSrc("project11-img11", "images/boardgame11.jpg");
	    	replaceSrc("project11-img12", "images/boardgame12.jpg");
	    	replaceSrc("project11-img13", "images/boardgame13.jpg");
	    	replaceSrc("project11-img14", "images/boardgame14.jpg");
	    	replaceSrc("project11-img15", "images/boardgame15.jpg");
	    	break;
    	case 12:
	    	replaceSrc("project12-img1", "images/stroller1.jpg");
	    	replaceSrc("project12-img2", "images/stroller2.jpg");
	    	replaceSrc("project12-img3", "images/stroller3.jpg");
	    	replaceSrc("project12-img4", "images/stroller4.jpg");
	    	replaceSrc("project12-img5", "images/stroller5.jpg");
	    	replaceSrc("project12-img6", "images/stroller6.jpg");
	    	replaceSrc("project12-img7", "images/stroller7.jpg");
	    	replaceSrc("project12-img8", "images/stroller8.jpg");
	    	replaceSrc("project12-img9", "images/stroller9.jpg");
	    	break;
    	case 13:
	    	replaceSrc("project13-img1", "images/handbag1.jpg");
	    	replaceSrc("project13-img2", "images/handbag2.jpg");
	    	break;
	  	default:
	    // code block
	}

	project.removeAttribute('hidden');
}


function hidePopup(event) {
	let projectId = 'popup-project' + realNumber(event.target.id);
	let project = document.getElementById(projectId);
	project.setAttribute('hidden',true);
}


function realNumber(numberString) {
	let tmpString = "";
	for (let idx=0; idx<numberString.length; idx++){
		if (String(Number(numberString[idx])) != 'NaN') {
			tmpString = tmpString.concat(numberString[idx]);
		}
	}
	return Number(tmpString);
}


function disableScroll(event) {
	document.body.style.overflow = 'hidden';
	let popupClasses = document.getElementsByClassName('popup');
	for (let element of popupClasses) {
	    element.style.overflow = 'auto'
	}
}


function enableScroll(event) {
	let popupClasses = document.getElementsByClassName('popup');
	for (let element of popupClasses) {
	    element.scrollTo(0, 0)
	}
	document.body.style.overflow = 'auto';
	for (let element of popupClasses) {
	    element.style.overflow = 'hidden'
	}
}


function contacts(element) {
	let url = '';
	if (element == 'behance') {
		url = 'https://www.behance.net/aritalcas';
	} else if (element == 'email') {
		url = 'mailto:arita.lcas@gmail.com';
	} else if (element == 'linkedin') {
		url = 'https://www.linkedin.com/in/aritalcas/';
	}
	window.open(url, '_blank');
}


function ignoreClick(event) {
	event.stopPropagation();
}


function animateTag(event) {
	if (event && event.target && event.target.id) {
		let hoveredElem = document.getElementById(event.target.id);
		if (!hoveredElem.classList.contains('animation')) {
			hoveredElem.classList.add('animation');
			removeTagAnimation(event);
		}
	}
}


function removeTagAnimation(event) {
	if (event && event.target && event.target.id) {
		let hoveredElem = document.getElementById(event.target.id);
		if (hoveredElem.classList.contains('animation')) {
			setTimeout(() => {hoveredElem.classList.remove('animation')},2000);
		}
	}
}


function indexTranslate() {
	let urlParams = new URLSearchParams(window.location.search);
	let lang = urlParams.get("lang");

	if (lang != "en") {
		document.getElementById("lang-pt-index").style.textDecoration = "underline";
		document.getElementById("portfolio-header-index").innerHTML = "Portfólio";
		document.getElementById("aboutme-header-index").innerHTML = "Sobre mim";
		document.getElementById("contacts-header-index").innerHTML = "Contatos";
		document.getElementById("hello").innerHTML = "Olá!";
		document.getElementById("intro-text").innerHTML = "O meu nome é Rita Silva, e sou <br> uma jovem designer residente no Porto.";
		document.getElementById("intro-button").innerHTML = "Saber mais";
		document.getElementById("post1-type").innerHTML = "Animações";
		document.getElementById("post2-type").innerHTML = "Design Gráfico";
		document.getElementById("post3-type").innerHTML = "Edição de Vídeo";
		document.getElementById("posts-description").innerHTML = 'Pode observar mais detalhadamente os meus projetos&nbsp;<a class="p-link" onclick="changeToPage(\'portfolio\');">aqui.</a>';
	} else {
		document.getElementById("lang-en-index").style.textDecoration = "underline";
		document.getElementById("portfolio-header-index").innerHTML = "Portfolio";
		document.getElementById("aboutme-header-index").innerHTML = "About me";
		document.getElementById("contacts-header-index").innerHTML = "Contacts";
		document.getElementById("hello").innerHTML = "Hello!";
		document.getElementById("intro-text").innerHTML = "My name is Rita Silva, and I'm <br> a young designer resident in Porto.";
		document.getElementById("intro-button").innerHTML = "Read more";
		document.getElementById("post1-type").innerHTML = "Animations";
		document.getElementById("post2-type").innerHTML = "Graphic Design";
		document.getElementById("post3-type").innerHTML = "Video Editing";
		document.getElementById("posts-description").innerHTML = 'You can take a closer look at my projects&nbsp;<a class="p-link" onclick="changeToPage(\'portfolio\');">here.</a>';
	}
}


function portfolioTranslate() {
    let urlParams = new URLSearchParams(window.location.search);
	let lang = urlParams.get("lang");

	if (lang != "en") {
		document.getElementById("lang-pt-portfolio").style.textDecoration = "underline";
		document.getElementById("portfolio-header-portfolio").innerHTML = "Portfólio";
		document.getElementById("aboutme-header-portfolio").innerHTML = "Sobre mim";
		document.getElementById("contacts-header-portfolio").innerHTML = "Contatos";
		document.getElementById("projects-h1").innerHTML = "Projetos";
		document.getElementById("projects-description").innerHTML = "Aqui pode encontrar alguns dos meus projetos, que abrangem várias áreas <br> do design - desde gráfico, animações e vídeo, a produtos.";
		/* PROJECT TITLES */
		document.getElementById("project1-title").innerHTML = "• My time at Portia •";
		document.getElementById("project1-subtitle").innerHTML = "Gameplay concept trailer";
		document.getElementById("project2-title").innerHTML = "• Bates Motel •";
		document.getElementById("project2-subtitle").innerHTML = "Animação";
		document.getElementById("project3-title").innerHTML = "• Convite de <br> Aniversário •";
		document.getElementById("project3-subtitle").innerHTML = "Animação";
		document.getElementById("project4-title").innerHTML = "• Behance banner •";
		document.getElementById("project4-subtitle").innerHTML = "Animação";
		document.getElementById("project5-title").innerHTML = '• "Wild berries <br> cookies" •';
		document.getElementById("project5-subtitle").innerHTML = "Packaging";
		document.getElementById("project6-title").innerHTML = "• Space Camp •";
		document.getElementById("project6-subtitle").innerHTML = "Design de logótipo";
		document.getElementById("project7-title").innerHTML = '• "Make their dreams <br> come true" •';
		document.getElementById("project7-subtitle").innerHTML = "Poster de adoção";
		document.getElementById("project8-title").innerHTML = "• Aurora •";
		document.getElementById("project8-subtitle").innerHTML = "Capa de single";
		document.getElementById("project9-title").innerHTML = "• Anne of Green <br> Gables •";
		document.getElementById("project9-subtitle").innerHTML = "Design de posters";
		document.getElementById("project10-title").innerHTML = "• Viriato •";
		document.getElementById("project10-subtitle").innerHTML = "Garrafa de vinho + packaging";
		document.getElementById("project11-title").innerHTML = '• Os últimos 8 •';
		document.getElementById("project11-subtitle").innerHTML = "Jogo de tabuleiro";
		document.getElementById("project12-title").innerHTML = '• Bouncing Stroller •';
		document.getElementById("project12-subtitle").innerHTML = "Design de produto";
		document.getElementById("project13-title").innerHTML = "• Leather Satchel •";
		document.getElementById("project13-subtitle").innerHTML = "Modelação 3D";
		/* PROJECT DESCRIPTION */
		document.getElementById("project1-description1").innerHTML = "<b>Trailer conceptual do jogo My Time at Portia.</b>";
		document.getElementById("project1-description2").innerHTML = "As músicas e clips utilizados pertencem à Pathea Games. As cenas apresentadas no vídeo foram feitas através da gravação das minhas próprias horas de jogo.";
		document.getElementById("project2-description").innerHTML = "Ilustração e animação inspiradas pela casa de Norman Bates, da série Bates Motel.";
		document.getElementById("project3-description").innerHTML = "Animação de um convite para uma festa de aniversário. As imagens utilizadas nesta composição pertencem ao Freepik.";
		document.getElementById("project3-credit").innerHTML = "<b>Sons usados:</b><br><br>https://freesound.org/people/acclivity/sounds/25880/<br>https://freesound.org/people/Hitrison/sounds/216675/<br>https://freesound.org/people/felix.blume/sounds/384218/";
		document.getElementById("project4-description").innerHTML = "Animação de logótipo, desenvolvido para marca pessoal.";
		document.getElementById("project5-description").innerHTML = "Design conceptual de uma embalagem para bolachas premium.";
		document.getElementById("project13-description").innerHTML = 'Mala baseada nos modelos da marca <a href="https://www.leathersatchel.com" target="_blank">The Leather Satchel Co</a>. Este design não foi criado por mim, e foi simplesmente utilizado como um exercício de modelação 3D, recorrendo ao software Marvelous Designer.';
	} else {
		document.getElementById("lang-en-portfolio").style.textDecoration = "underline";
		document.getElementById("portfolio-header-portfolio").innerHTML = "Portfolio";
		document.getElementById("aboutme-header-portfolio").innerHTML = "About me";
		document.getElementById("contacts-header-portfolio").innerHTML = "Contacts";
		document.getElementById("projects-h1").innerHTML = "Projects";
		document.getElementById("projects-description").innerHTML = "Here you can find some of my projects, which encompass several areas <br> of design - from graphic, animations and video, to products.";
		/* PROJECT TITLES */
		document.getElementById("project1-title").innerHTML = "• My time at Portia •";
		document.getElementById("project1-subtitle").innerHTML = "Gameplay concept trailer";
		document.getElementById("project2-title").innerHTML = "• Bates Motel •";
		document.getElementById("project2-subtitle").innerHTML = "Animation";
		document.getElementById("project3-title").innerHTML = "• Birthday Invitation •";
		document.getElementById("project3-subtitle").innerHTML = "Animation";
		document.getElementById("project4-title").innerHTML = "• Behance banner •";
		document.getElementById("project4-subtitle").innerHTML = "Animation";
		document.getElementById("project5-title").innerHTML = "• Wild berries cookies •";
		document.getElementById("project5-subtitle").innerHTML = "Concept packaging";
		document.getElementById("project6-title").innerHTML = "• Space Camp •";
		document.getElementById("project6-subtitle").innerHTML = "Logo design";
		document.getElementById("project7-title").innerHTML = "• Make their dreams <br> come true •";
		document.getElementById("project7-subtitle").innerHTML = "Adoption poster";
		document.getElementById("project8-title").innerHTML = "• Aurora •";
		document.getElementById("project8-subtitle").innerHTML = "Single cover";
		document.getElementById("project9-title").innerHTML = "• Anne of Green <br> Gables •";
		document.getElementById("project9-subtitle").innerHTML = "Poster design";
		document.getElementById("project10-title").innerHTML = "• Viriato •";
		document.getElementById("project10-subtitle").innerHTML = "Wine bottle + packaging";
		document.getElementById("project11-title").innerHTML = '• "Os últimos 8" •';
		document.getElementById("project11-subtitle").innerHTML = "Board game";
		document.getElementById("project12-title").innerHTML = "• Bouncing Stroller •";
		document.getElementById("project12-subtitle").innerHTML = "Product design";
		document.getElementById("project13-title").innerHTML = "• Leather Satchel •";
		document.getElementById("project13-subtitle").innerHTML = "3D modelling exercise";
		/* PROJECT DESCRIPTION */
		document.getElementById("project1-description1").innerHTML = "<b>My Time at Portia concept gameplay trailer.</b>";
		document.getElementById("project1-description2").innerHTML = "The game clips and song used belong to Pathea Games. The footage was made by filming my own gameplay.";
		document.getElementById("project2-description").innerHTML = "Illustration and animation inspired by Norman Bates' house, from the Bates Motel tv series.";
		document.getElementById("project3-description").innerHTML = "Animated birthday party invitation. The artwork used for this animation belongs to Freepik.";
		document.getElementById("project3-credit").innerHTML = "<b>Sounds used:</b><br><br>https://freesound.org/people/acclivity/sounds/25880/<br>https://freesound.org/people/Hitrison/sounds/216675/<br>https://freesound.org/people/felix.blume/sounds/384218/";
		document.getElementById("project4-description").innerHTML = "Animated logo developed for personal branding.";
		document.getElementById("project5-description").innerHTML = "Concept packaging design for premium wild berries cookies.";
		document.getElementById("project13-description").innerHTML = 'Satchel based in the designs of the brand <a href="https://www.leathersatchel.com" target="_blank">The Leather Satchel Co</a>. This design wasn’t created by me and was simply used as an exercise of 3D modeling with the software Marvelous Designer.';
	}
}


function aboutTranslate() {
    let urlParams = new URLSearchParams(window.location.search);
	let lang = urlParams.get("lang");

	if (lang != "en") {
		document.getElementById("lang-pt-about").style.textDecoration = "underline";
		document.getElementById("portfolio-header-about").innerHTML = "Portfólio";
		document.getElementById("aboutme-header-about").innerHTML = "Sobre mim";
		document.getElementById("contacts-header-about").innerHTML = "Contatos";
		document.getElementById("about-h1").innerHTML = "Olá!";
		document.getElementById("about-description1").innerHTML = "O meu nome é Rita Silva, e sou<br>uma jovem designer residente no Porto.";
		document.getElementById("about-description2").innerHTML = "Apesar de me ter licenciado em Design de Produto, rapidamente descobri que a área onde me sinto realmente enquadrada é Design Gráfico / Web.";
		document.getElementById("about-description3").innerHTML = "Sou uma pessoa motivada e trabalhadora, pelo que estou constantemente a aprender novas competências para melhorar os meus projetos. Aliás, foi essa vontade de aprender cada vez mais que me levou a desenhar e programar este mesmo site.";
    	document.getElementById("skills-h1").innerHTML = "Competências Técnicas";
    } else {
    	document.getElementById("lang-en-about").style.textDecoration = "underline";
		document.getElementById("portfolio-header-about").innerHTML = "Portfolio";
		document.getElementById("aboutme-header-about").innerHTML = "About me";
		document.getElementById("contacts-header-about").innerHTML = "Contacts";
		document.getElementById("about-h1").innerHTML = "Hello!";
		document.getElementById("about-description1").innerHTML = "My name is Rita Silva, and I'm<br>a young designer resident in Porto.";
		document.getElementById("about-description2").innerHTML = "Although I initially graduated with a bachelor degree in Product Design, I quickly discovered that the area where I really felt like I fit in was Graphic/Web Design.";
		document.getElementById("about-description3").innerHTML = "I'm a driven and hardworking person, who is constantly learning new skills in order to improve my projects. In fact, it was this desire to learn more and more that pushed me to design and code my own website.";
    	document.getElementById("skills-h1").innerHTML = "Technical Skills";
    }
}


function contactsTranslate() {
    let urlParams = new URLSearchParams(window.location.search);
	let lang = urlParams.get("lang");

	if (lang != "en") {
		document.getElementById("lang-pt-contacts").style.textDecoration = "underline";
		document.getElementById("portfolio-header-contacts").innerHTML = "Portfólio";
		document.getElementById("aboutme-header-contacts").innerHTML = "Sobre mim";
		document.getElementById("contacts-header-contacts").innerHTML = "Contatos";
    } else {
    	document.getElementById("lang-en-contacts").style.textDecoration = "underline";
		document.getElementById("portfolio-header-contacts").innerHTML = "Portfolio";
		document.getElementById("aboutme-header-contacts").innerHTML = "About me";
		document.getElementById("contacts-header-contacts").innerHTML = "Contacts";
    }
}


function changeToPT() {
	let urlParams = new URLSearchParams(window.location.search);
	let lang = urlParams.get("lang");

	if (lang != "pt") {
		window.location = window.location.pathname + "?lang=pt";
	}
}


function changeToEN() {
	let urlParams = new URLSearchParams(window.location.search);
	let lang = urlParams.get("lang");

	if (lang != "en") {
		window.location = window.location.pathname + "?lang=en";
	}
}


function changeToPage(page){
	let urlParams = new URLSearchParams(window.location.search);
	let lang = urlParams.get("lang");

	if (lang) {
		window.location = page + ".html?lang="+lang;
	} else {
		window.location = page + ".html";
	}
}
