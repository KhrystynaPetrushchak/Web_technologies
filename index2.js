
const dogImage = document.getElementById("dog");
dogImage.addEventListener("click", myScript);
function myScript(){
  dogImage.src =( dogImage.src.includes('images/old%20dog.png')) ? 'images/dog2.jpg' : 'images/old dog.png';
}

const container=document.getElementById("text-at-the-end");
container.addEventListener("mouseover", changeColor);
container.addEventListener("mouseout", getColorBack);
function changeColor(){
	if(container.style.backgroundColor =='rgb(253,248,246)'){
		container.style.backgroundColor = 'rgb(238,128,144)';
	}
	else{
		container.style.backgroundColor = 'rgb(238,128,144)';
	}
}
function getColorBack(){
	if(container.style.backgroundColor =='rgb(238,128,144)'){
		container.style.backgroundColor = 'rgb(253,248,246)';
	}
	else{
		container.style.backgroundColor = 'rgb(253,248,246)';
	}

}

/*-------------------------------------------------------------------------------*/
const knopka = document.getElementById("button");

knopka.addEventListener("click", Change);

function Change(){
	const navButtons = Array.from(document.getElementsByClassName("navButton"));
	const [navButtonDiv] = document.getElementsByClassName('header_section');
	const [container] = document.getElementsByClassName('container');
	const [container2] = document.getElementsByClassName('container2');
	const container3 = Array.from(document.getElementsByClassName('container3'));
	
	if (knopka.style.backgroundColor === 'rgb(238, 138, 144)') {
		
		knopka.style.backgroundColor = '#692238';
		knopka.remove();
		navButtonDiv.append(knopka);
		container.style.backgroundColor = '#EE8A90';
		container2.style.backgroundColor = '#EE8A90';
		container3.map(item => item.style.backgroundColor = '#EE8A90')
	}
	else{
		knopka.style.backgroundColor = '#EE8A90';
		knopka.remove();
		navButtonDiv.insertBefore(knopka,navButtons[0]);
		container.style.backgroundColor = '#692238';
		container2.style.backgroundColor = '#692238';
		container3.map(item => item.style.backgroundColor = '#692238')
	}
}

