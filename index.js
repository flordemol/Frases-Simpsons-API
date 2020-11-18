const tarj = document.querySelector("#tarjeta");

    function crearTarjeta(){
        fetch('https://thesimpsonsquoteapi.glitch.me/quotes')
        .then(response => response.json())
        .then(json => {
            json.forEach(element => {
                const tarjeta = document.createElement('div');
                if(element.characterDirection === "Right"){
                    tarjeta.innerHTML += `
                        <h3>${element.character}</h3>
                        <div class="body">
                        <p>"${element.quote}"</p>
                        <img src="${element.image}" alt="">
                        </div>
                        `   
                } 
                if(element.characterDirection === "Left"){
                    tarjeta.innerHTML += `
                        <h3>${element.character}</h3>
                        <div class="body">
                        <img src="${element.image}" alt="">
                        <p>"${element.quote}"</p>
                        </div>
                        `   
                }
                tarj.appendChild(tarjeta)
            })
            
        });
    }

crearTarjeta();