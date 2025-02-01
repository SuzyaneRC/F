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
            <h1>${user.name}</h1>
            <p>${user.description}</p>
            <p>${user.type}</p>
            <p>${user.startDate}</p>
            <p>${user.endDate}</p>
            <p>${user.location}</p>
        
        `;

      //  document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
      document.getElementById('listaShows').appendChild(divIndivual)
    });
}).catch(error => console.log(error));