 var obj = [{img: 'img9', div: 'popup-project9'}];

function showPopup(event) {
	let projectId = 'popup-project' + realNumber(event.target.id);
	let project = document.getElementById(projectId);
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





function portfolioTab() {
	window.open("portfolio.html", "_self");
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


function ignoreClick(event){
	event.stopPropagation();
}