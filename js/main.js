const carImg = document.querySelector('.carousel-images');
let index = 0;

function moveCarousel() {
    index++;
    if (index >= carImg.children.length) {
        index = 0;
    }
    carImg.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(moveCarousel, 4000);

// fetch('js/peliculas.json')
//     .then(response => response.json())
//     .then(data => {
//         for (let i = 0; i < data.length; index++) {
//             const movie = data[i];
//             const movieCard = document.createElement('div');
//         }

        
//     })
//     .catch(error => console.error(error));
const peliculas=document.getElementById('peliculas');

fetch('./bd.php')
  .then(response => response.json())
  .then(data => {
    console.log(data); 
    for(i=0; i<data.length; i++){
        let nom=data[i].Nombre;
        let des=data[i].Des;
        let id=data[i].id;
        let fEst=data[i].fEst;

        console.log(nom);
        console.log(des);

        const movieCard = document.createElement('div');
        movieCard.innerHTML=` 
          <div class="card" style="width: 18rem;">
            <img src="Cartelera/fnaf.jpg" class="card-img-top" alt="fnaf">
            <div class="card-body">
              <h5 class="card-title">${nom}</h5>
              <a href="#" class="btn btn-primary" id=${id}>Ver mas</a>
            </div>
          </div>
        `;
        peliculas.appendChild(movieCard);
    }
  })
  .catch(error => console.error('Error:', error));


  // fetch('./img.php')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }
  //   return response.blob(); // Convierte la respuesta a un blob
  // })
  // .then(blob => {
  //   const imgURL = URL.createObjectURL(blob); // Crea una URL para usar en <img>
  //   console.log(imgURL); // Muestra la URL en la consola
  //   const imgElement = document.createElement('img');
  //   imgElement.src = imgURL;
  //   document.body.appendChild(imgElement); // Agrega la imagen al DOM
  // })
  // .catch(error => console.error('Error al cargar la imagen:', error));
