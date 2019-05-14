let API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
const form = document.querySelector('#inputs');
const input = document.querySelector('#searchTerm');
const loader = document.querySelector('#loadingimage');
const images = document.querySelector('.images');
form.addEventListener('submit', formSubmitted);

loader.style.display = 'none';

function formSubmitted(event){
	images.innerHTML = ""
	event.preventDefault();
	const searchTerm = input.value;

	API_URL +='sol=' + searchTerm + '&page=1&api_key=aJDLkW5WTb3oYgmdZgpaaqru0fBvOoxWL08TKP2J';

	search(searchTerm)
		.then(displayImages);
}

function search(searchTerm){
	loader.style.display = '';
	let a = fetch(`${API_URL}`)
		.then(response => response.json())
		.then(result =>{
			console.log(result.photos);
			return result.photos;
		});
	return a;
}

function displayImages(Images){
	Images.forEach(image => {
		const imageElement = document.createElement('img');
		imageElement.style.width = '400px';
		imageElement.style.height = '400px';
		imageElement.src = image.img_src;
		images.appendChild(imageElement);
	})
	loader.style.display = 'none';
	API_URL = '';
	API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
}
