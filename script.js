let img = document.querySelector('img');
const Container = document.querySelector('#Container');
const Refreshbtn = document.querySelector('#RefreshImg');
const NewGiphy = document.querySelector('#NewGiphy');
let UserInput = document.querySelector('#UserInput');

Refreshbtn.addEventListener('click', RefreshGiphy);
NewGiphy.addEventListener('click', DifferentGiphy);

function RefreshGiphy(UserInput){
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=4Cdrh3upRQiptnX30px7gGTsqEa0Hcoh&s=' + UserInput, {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        img.src = response.data.images.original.url;
    })
    .catch(ErrorMsg);
}

function DifferentGiphy(e){
    e.preventDefault();
    RefreshGiphy(UserInput.value);
    UserInput.value = '';
}

function ErrorMsg(){
    Container.removeChild(img);
    const Text = document.createElement('p');
    Text.textContent = 'sorry, couldnt find any Giphys';
    Text.id = 'TextStyle';
    Container.appendChild(Text);
}

RefreshGiphy();