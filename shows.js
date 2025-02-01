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
            <p>${user.description}</p>
            <p>Tipo de atração: ${user.type}</p>
            <p> Início: ${user.startDate} </p>
            <p>Término: ${user.endDate}</p>
            <p>Local: ${user.location}</p>
        
        `;

      //  document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
      document.getElementById('listaShows').appendChild(divIndivual)
    });
}).catch(error => console.log(error));