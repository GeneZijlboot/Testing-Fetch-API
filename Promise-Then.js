const NewGiphy = document.getElementById('NewGiphy');
let UserInput = document.querySelector('#UserInput');
let img = document.querySelector('img');

const StartImg = 'cats';
const ErrorMsg = 'error';

NewGiphy.addEventListener('click', DifferentGiphy);

function RefreshGiphy(UserInput){
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=4Cdrh3upRQiptnX30px7gGTsqEa0Hcoh&s=' + UserInput, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        img.src = response.data.images.original.url;
    })
    .catch(function(){
        RefreshGiphy(ErrorMsg);
    });
}

function DifferentGiphy(e){
    e.preventDefault();
    RefreshGiphy(UserInput.value);
    UserInput.value = '';
}

RefreshGiphy(StartImg);