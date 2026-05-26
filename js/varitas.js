// Definir el límite de pantalla (768px)
const mediaQuery = window.matchMedia("(min-width: 1024px)");
const menuDesplegable = document.getElementById("menuDes");
const enlacesMenu = document.getElementById("linkMenu");
const menu= document.getElementById('menu');

function evaluarPantalla(e) {
  if (e.matches) {
    enlacesMenu.remove;
    menu.innerHTML=`<div class="btn-group dropstart" >
                <ul class="dropdown-menu" id="linkMenu">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="personajes.html">Personajes</a></li>
                    <li><a href="temporadas.html">Temporadas</a></li>
                    <li><a href="datos.html">Datos</a></li>
                    <li><a href="juego.html">¿Heckapoo?</a></li>
                </ul>
            </div>`;
  } else {
    enlacesMenu.remove;
    menu.innerHTML=`<div class="btn-group dropstart" >
                <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-list" id="menuDes"></i>
                </button>
                <ul class="dropdown-menu" id="linkMenu">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="personajes.html">Personajes</a></li>
                    <li><a href="temporadas.html">Temporadas</a></li>
                    <li><a href="datos.html">Datos</a></li>
                    <li><a href="juego.html">¿Heckapoo?</a></li>
                </ul>
            </div>`;
  }
}

// Escuchar los cambios de tamaño de pantalla en tiempo real
mediaQuery.addEventListener("change", evaluarPantalla);

// Ejecutar la función una vez al cargar la página
evaluarPantalla(mediaQuery);


const varitas= document.getElementById('varitas');
varitas.style.backgroundImage="url('imgs/varita.png')";
let cont=1;
varitas.addEventListener("click", function(){
       switch(cont){
        case 1: 
          varitas.style.animation='cambio1 1s ease-in-out ';
          setTimeout(function() {
          varitas.style.backgroundImage = "url('../imgs/varita2.png')";
          }, 1000);
          cont++;
        break;
        case 2: 
          varitas.style.animation='cambio2 1s ease-in-out ';
          setTimeout(function() {
          varitas.style.backgroundImage = "url('../imgs/varita3.png')";
          }, 1000);
          cont++;
        break;
        case 3: 
          varitas.style.animation='cambio3 1s ease-in-out ';
          setTimeout(function() {
          varitas.style.backgroundImage = "url('../imgs/varita.png')";
          }, 1000);
          cont=1;
        break;
       }
    })
//animation: cambio1 2.5s ease-in-out ;