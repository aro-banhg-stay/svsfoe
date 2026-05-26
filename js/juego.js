const intentos= document.getElementById('intentos');
const hp1=document.getElementById('hp1');
const hp2=document.getElementById('hp2');
const hp3=document.getElementById('hp3');
const hp4=document.getElementById('hp4');
const hp5=document.getElementById('hp5');
const hp6=document.getElementById('hp6');
const ventana= document.getElementById('ventana');

let ints=3;
intentos.innerText=ints;


function ver1(){
    hp1.addEventListener("click", function(){
       ventana.innerHTML=`<article class="win" id="win">
            <img src="imgs/tijeras/tj1.png" alt="">
            <p>¡¡Haz pasado la prueba!!</p>
            <p>Aqui tienes tus tijeras</p>
            <button onclick="location.reload()">Jugar de nuevo</button>
        </article>`;
    })
    hp2.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp2.style.animation='nhp .3s ease-in-out 1';
        hp2.style.marginLeft='30px'
        hp2.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
        }
    })
    hp3.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp3.style.animation='nhp .3s ease-in-out 1';
        hp3.style.marginLeft='30px'
        hp3.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp4.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp4.style.animation='nhp .3s ease-in-out 1';
        hp4.style.marginLeft='30px'
        hp4.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp5.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp5.style.animation='nhp .3s ease-in-out 1';
        hp5.style.marginLeft='30px'
        hp5.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
   hp6.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp6.style.animation='nhp .3s ease-in-out 1';
        hp6.style.marginLeft='30px'
        hp6.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
}

function ver2(){
    hp1.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp1.style.animation='nhp .3s ease-in-out 1';
        hp1.style.marginLeft='30px'
        hp1.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
        }
    })
    hp2.addEventListener("click", function(){
       ventana.innerHTML=`<article class="win" id="win">
            <img src="imgs/tijeras/tj2.png" alt="">
            <p>¡¡Haz pasado la prueba!!</p>
            <p>Aqui tienes tus tijeras</p>
            <button onclick="location.reload()">Jugar de nuevo</button>
        </article>`;
    })
    hp3.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp3.style.animation='nhp .3s ease-in-out 1';
        hp3.style.marginLeft='30px'
        hp3.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp4.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp4.style.animation='nhp .3s ease-in-out 1';
        hp4.style.marginLeft='30px'
        hp4.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp5.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp5.style.animation='nhp .3s ease-in-out 1';
        hp5.style.marginLeft='30px'
        hp5.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
   hp6.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp6.style.animation='nhp .3s ease-in-out 1';
        hp6.style.marginLeft='30px'
        hp6.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
}

function ver3(){
    hp1.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp1.style.animation='nhp .3s ease-in-out 1';
        hp1.style.marginLeft='30px'
        hp1.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
        }
    })
    hp2.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp2.style.animation='nhp .3s ease-in-out 1';
        hp2.style.marginLeft='30px'
        hp2.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp3.addEventListener("click", function(){
       ventana.innerHTML=`<article class="win" id="win">
            <img src="imgs/tijeras/tj3.png" alt="">
            <p>¡¡Haz pasado la prueba!!</p>
            <p>Aqui tienes tus tijeras</p>
            <button onclick="location.reload()">Jugar de nuevo</button>
        </article>`;
    })
    hp4.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp4.style.animation='nhp .3s ease-in-out 1';
        hp4.style.marginLeft='30px'
        hp4.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp5.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp5.style.animation='nhp .3s ease-in-out 1';
        hp5.style.marginLeft='30px'
        hp5.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
   hp6.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp6.style.animation='nhp .3s ease-in-out 1';
        hp6.style.marginLeft='30px'
        hp6.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
}

function ver4(){
    hp1.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp1.style.animation='nhp .3s ease-in-out 1';
        hp1.style.marginLeft='30px'
        hp1.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
        }
    })
    hp2.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp2.style.animation='nhp .3s ease-in-out 1';
        hp2.style.marginLeft='30px'
        hp2.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp3.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp3.style.animation='nhp .3s ease-in-out 1';
        hp3.style.marginLeft='30px'
        hp3.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp4.addEventListener("click", function(){
       ventana.innerHTML=`<article class="win" id="win">
            <img src="imgs/tijeras/tj4.png" alt="">
            <p>¡¡Haz pasado la prueba!!</p>
            <p>Aqui tienes tus tijeras</p>
            <button onclick="location.reload()">Jugar de nuevo</button>
        </article>`;
    })
    hp5.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp5.style.animation='nhp .3s ease-in-out 1';
        hp5.style.marginLeft='30px'
        hp5.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
   hp6.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp6.style.animation='nhp .3s ease-in-out 1';
        hp6.style.marginLeft='30px'
        hp6.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
}

function ver5(){
    hp1.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp1.style.animation='nhp .3s ease-in-out 1';
        hp1.style.marginLeft='30px'
        hp1.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
        }
    })
    hp2.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp2.style.animation='nhp .3s ease-in-out 1';
        hp2.style.marginLeft='30px'
        hp2.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp3.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp3.style.animation='nhp .3s ease-in-out 1';
        hp3.style.marginLeft='30px'
        hp3.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp4.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp4.style.animation='nhp .3s ease-in-out 1';
        hp4.style.marginLeft='30px'
        hp4.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp5.addEventListener("click", function(){
       ventana.innerHTML=`<article class="win" id="win">
            <img src="imgs/tijeras/tj5.png" alt="">
            <p>¡¡Haz pasado la prueba!!</p>
            <p>Aqui tienes tus tijeras</p>
            <button onclick="location.reload()">Jugar de nuevo</button>
        </article>`;
    })
   hp6.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp6.style.animation='nhp .3s ease-in-out 1';
        hp6.style.marginLeft='30px'
        hp6.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
}

function ver6(){
    hp1.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp1.style.animation='nhp .3s ease-in-out 1';
        hp1.style.marginLeft='30px'
        hp1.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
        }
    })
    hp2.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp2.style.animation='nhp .3s ease-in-out 1';
        hp2.style.marginLeft='30px'
        hp2.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp3.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp3.style.animation='nhp .3s ease-in-out 1';
        hp3.style.marginLeft='30px'
        hp3.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp4.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp4.style.animation='nhp .3s ease-in-out 1';
        hp4.style.marginLeft='30px'
        hp4.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
   hp5.addEventListener("click", function(){
       if(ints>0){
        ints-=1;
        hp5.style.animation='nhp .3s ease-in-out 1';
        hp5.style.marginLeft='30px'
        hp5.style.width='0';
        intentos.innerText=ints;
        console.log(ints)
        if(ints==0){
            ventana.innerHTML=`<article class="go" id="go">
            <img src="imgs/tijeras/hp-go.gif" alt="game-over">
            <p>Fallaste la prueba</p>
            <p>No eres merecedor de las tijeras</p>
            <button onclick="location.reload()">Intentar de nuevo</button>
            </article>`;
            }
       }
    })
    hp6.addEventListener("click", function(){
       ventana.innerHTML=`<article class="win" id="win">
            <img src="imgs/tijeras/tj6.png" alt="">
            <p>¡¡Haz pasado la prueba!!</p>
            <p>Aqui tienes tus tijeras</p>
            <button onclick="location.reload()">Jugar de nuevo</button>
        </article>`;
    })
}

const min = 1;
const max = 6;
const ver = Math.floor(Math.random() * (max - min + 1)) + min;

switch (ver) {
    case 1:
        ver1();
        console.log("1");
        break;
    case 2:
        ver2();
        console.log("2");
        break;
    case 3:
        ver3();
        console.log("3");
        break;
     case 4:
        ver4();
        console.log("4");
        break;
    case 5:
        ver5();
        console.log("5");
        break;
    case 6:
        ver6();
        console.log("6");
        break;
  default:
    console.log("No tengo mascota");
    break;
}