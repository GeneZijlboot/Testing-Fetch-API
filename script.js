const img = document.querySelector('img');
let A = 'https://api.giphy.com/v1/gifs/translate?api_key=4Cdrh3upRQiptnX30px7gGTsqEa0Hcoh&s=cat';
let SearchValue = document.getElementById('SearchValue');

const form = document.querySelector('form');
form.addEventListener('submit', SearchGiphy);

fetch(A, {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    })
    .catch(function(e) {
        console.log(e);
    })

function SearchGiphy(e){
    e.preventDefault();
    console.log(SearchValue.value);
    SearchValue.value = '';

}