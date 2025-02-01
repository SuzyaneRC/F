fetch('https://fasc2025.onrender.com/shows').then(
    res => {
        return res.json();
    }
).then(data => {
    data.forEach(user => {

const divIndivual = document.createElement('div');


divIndivual.classList.add('showsDiv'); 

        divIndivual.innerHTML =  `
            <img src= "${user.imgUrl}" id="imagenss"></img>
            <h1 id="tituloDiv">${user.name}</h1>
        `;

      //  document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
      document.getElementById('listaShows').appendChild(divIndivual)
    });
}).catch(error => console.log(error));