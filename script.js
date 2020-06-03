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




function myMove() {
	var elem = document.getElementById("animate");
	var pos = 0;
	var id = setInterval(frame, 0.1);
	function frame() {
		if (pos == 320) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + "px";
		}
	}
}