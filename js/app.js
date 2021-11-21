


const ul = document.querySelector('ul')

let input = document.getElementById('search');
input.addEventListener('keydown', e =>{
    if(e.key == 'Enter'){
        apiReq();
    }
})


const apiReq = () => {

    
    const url = `https://api.unsplash.com/search/photos?query=${input.value}&orientation=portrait&per_page=27&page=1&client_id=pV3bWqJz8xB5L1RZlKPRZn33yJCWHZ4W5WQSH9k_SFM`;

    ul.innerHTML = '';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            loadImgs(data);
        })


function loadImgs(data){
    for(i = 0; i < data.results.length; i++){
        const elem = `<li><img src="${data.results[i].urls.raw}" width='390'></li>`;
        ul.innerHTML += elem;
    }
}
}

document.querySelector('.svg').addEventListener('click', apiReq)
