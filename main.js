let API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
const form = document.querySelector('#inputs');
const input = document.querySelector('#searchTerm');
const loader = document.querySelector('#loadingimage');
const images = document.querySelector('#images');


form.addEventListener('submit', formSubmitted);

loader.style.display = 'none';

function formSubmitted(event){
	for(let i = 1; i < 26; i++)
	{
		let img = document.querySelector('#img' + i);
		img.src = '';
	}
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
	let a = 1;
	Images.forEach(image => {
		const imageElement = document.querySelector('#img' + a);
		imageElement.src = image.img_src;
		a++;
	})
	loader.style.display = 'none';
	API_URL = '';
	API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?';
}

