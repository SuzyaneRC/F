fetch('https://fasc2025.onrender.com/palcos').then(
    res => {
        return res.json();
    }
).then(data => {
    data.forEach(stage => {
        const divIndivualPalcos = document.createElement('div');
        divIndivualPalcos.classList.add('PalcosDiv');

      divIndivualPalcos.innerHTML  = `
            <h1 id="tituloDivPalcos">${stage.name}</h1>
            <p>${stage.history}</p>
             <p> Local: ${stage.location}</p>
            
        `;
        document.getElementById('listaPalcos').appendChild(divIndivualPalcos)

    });
}).catch(error => console.log(error));