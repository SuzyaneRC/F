fetch('https://fasc2025.onrender.com/shows').then(
    res => {
        return res.json();
    }
).then(data => {
    data.forEach(user => {

const divIndivualArtistas = document.createElement('div');


divIndivualArtistas.classList.add('ArtistasDiv'); 

divIndivualArtistas.innerHTML =  `
            <img src= "${user.imgUrl}" id="imagensArtistas"></img>
            <h1 id="tituloDivArtistas">${user.name}</h1>
        `;

      //  document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
      document.getElementById('listaArtistas').appendChild(divIndivualArtistas)
    });
}).catch(error => console.log(error));