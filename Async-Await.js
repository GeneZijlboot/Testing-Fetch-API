const NewGiphy = document.getElementById('NewGiphy');
let UserInput = document.querySelector('#UserInput');
let img = document.querySelector('img');

const StartImg = 'cats';
const ErrorMsg = 'error';

NewGiphy.addEventListener('click', DifferentGiphy);

async function RefreshGiphy(UserInput){
    try{
        const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=4Cdrh3upRQiptnX30px7gGTsqEa0Hcoh&s=' + UserInput, {mode: 'cors'}); 
        const GiphyData = await response.json();
        img.src = GiphyData.data.images.original.url;
    }catch(error){
        console.log(error);
        RefreshGiphy(ErrorMsg);
    }
}

function DifferentGiphy(e){
    e.preventDefault();
    RefreshGiphy(UserInput.value);
    UserInput.value = '';
}

RefreshGiphy(StartImg);