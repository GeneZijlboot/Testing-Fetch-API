let img = document.querySelector('img');
const Refreshbtn = document.querySelector('#RefreshImg');
const NewGiphy = document.querySelector('#NewGiphy');
let UserInput = document.querySelector('#UserInput');

Refreshbtn.addEventListener('click', RefreshGiphy);
NewGiphy.addEventListener('click', DifferentGiphy);

function RefreshGiphy(){
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=4Cdrh3upRQiptnX30px7gGTsqEa0Hcoh&s=cat', {mode: 'cors'})
    .then(function(response) {
        return response.json()
    })
    .then(function(response){
        img.src = response.data.images.original.url;
    })
    .catch(function(e) {
        console.log(e);
    })
}

function DifferentGiphy(e){
    e.preventDefault();
    console.log(UserInput.value);
    UserInput.value = '';
}

RefreshGiphy();