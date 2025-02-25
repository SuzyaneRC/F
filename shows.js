function formatarData(dataString) {
    const datas = new Date(dataString);
    
    return datas.toLocaleDateString('pt-BR', {
        year: 'numeric',  
        month: 'numeric',    
        day: 'numeric' ,
        hour:  'numeric',
        minute:'numeric'
        
    });
}


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
            <p> Início: ${formatarData(user.startDate)} </p>
            <p>Término: ${formatarData(user.endDate)} </p>
            <p>Local: ${user.location}</p>
        
        `;

      //  document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
      document.getElementById('listaShows').appendChild(divIndivual)
    });
}).catch(error => console.log(error));