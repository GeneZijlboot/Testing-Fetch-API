let img = document.querySelector('img');

const Refreshbtn = document.querySelector('#RefreshImg');
Refreshbtn.addEventListener('click', RefreshImg);

function RefreshImg(){
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

RefreshImg();