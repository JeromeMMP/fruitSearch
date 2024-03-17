const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');
const body = document.querySelector('body');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	const string = str.toLowerCase();
	results = fruit.filter((v)=>v.toLowerCase().includes(string)=== true)
	
	const resultBolded = results.map((v)=>{
		if (v.toLowerCase().indexOf(input.value.toLowerCase())!==0){
			return v.replace(string,`<span class="bold">${string}</span>`)}
		else {
			return v.toLowerCase().replace(string,`<span class="bold">${string.charAt(0).toUpperCase()+string.slice(1)}</span>` ) };
			// return v.replace(new RegExp(string, 'i'), `<span class='bold'>$&</span>`)
	})
	return resultBolded
	
}



function searchHandler() {
	//adding suggestions list
	if(input.value!==''){
	document.querySelector('.suggestions ul').remove(); 
	document.querySelector('.suggestions').appendChild(document.createElement('ul'));

	let fruitArr = search(input.value);
	

	fruitArr.forEach((v)=>{
		let liS = document.createElement('li');
		liS.classList.add('fruitSuggestion'); 
		liS.setAttribute('id',v);
	
		liS.innerHTML = v
		document.querySelector('.suggestions ul').appendChild(liS);

	})}
	else{
		resetUl();
	}

	// TODO
}

//I used the hover in css
function showSuggestions(evt) {
	// let suggestions = document.querySelectorAll('.fruitSuggestion');

	// suggestions.forEach((v)=>v.classList.remove('backGround')); 

	// if(evt.target.tagName == 'LI'){
	// 	evt.target.classList.add('backGround')
	// }
	// else{
	// 	suggestions.forEach((v)=>v.classList.remove('backGround')); 
	// }
	
	

	// TODO
}

function useSuggestion(evt) {
	const input = document.querySelector('#fruit');

	 input.value = evt.target.innerText;
	 
	 resetUl();
	
	
	// TODO
}

function resetUl(){
	document.querySelector('.suggestions ul').remove(); 
		document.querySelector('.suggestions').appendChild(document.createElement('ul'));
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
// body.addEventListener('mouseover', showSuggestions)

