

// function mc() {
//     let passwordField = document.getElementById("pass");
//     if (passwordField.type == "password") {
//         passwordField.type = "text";
//     } else {
//         passwordField.type = "password";

//     }

//     // vi.classList.toggle("fa-eye-slash");
//     // vi.classList.toggle("fa-eye");
// }
document.getElementById('vi').addEventListener('change', function() {
    const passwordInput = document.getElementById('pass');
    
    if (this.checked) {
        passwordInput.type = 'text';  // Muestra el texto
    } else {
        passwordInput.type = 'password';  // Oculta el texto (muestra puntos)
    }
});
//-------------------------------Declaracion de variables y constantes-------------------------------


const title= document.getElementById("title");
const form= document.getElementById("form");
const reg= document.getElementById("reg");
let vi= document.getElementById("vi");
// vi.onclick=mc;
// vi.ontouchstart=mc;
// vi.addEventListener("click",mc);
// vi.addEventListener('check',mc);
//-------------------------------Funciones-------------------------------
function change(){
    if (title.innerText === "CMC | Inicio sesion"){
        form.style.transform=`rotateZ(360deg)`
        form.style.height='fit-content'
        form.style.boxShadow='0px 0px 80px rgba(255, 255, 255)'
        form.style.transition=`all 1s ease-in-out`
        title.innerHTML = "CMC | Registro";
        setTimeout(()=> {
            form.innerHTML =   `
                <img src="icon.png" alt="">
                <h1 style="margin:15px 0; z-index: 1;">Registrarse</h1>
                <div class="container">
                    <label for="username"><b>Usuario</b></label>
                    <input class="in" type="text" placeholder="Ingrese su usuario" name="username" required>

                    <label for="email"><b>Correo electronico</b></label>
                    <input class="in" type="text" placeholder="Ingrese su email" name="email" required>

                    <label for="psw"><b>Contraseña</b></label>
                    <div class="pass">
                        <input  id="pass" class="in" type="password" placeholder="Ingrese su contraseña" name="pass" required>
                        <button style="color: white; background-color: transparent; border: 0;"  type="button" onclick="mc()" ontouchstart="mc()"><i id="vi"  class="fa-solid fa-eye"></i></button>
                        
                    </div>
                    <button  class="btn" type="submit">Registrarse</button>
                    
                    <br>
                    <br>
                    <section style="display: flex; text-align: center   ;">
                        <span class="psw"><button type="button" class='a' onclick="change()" ontouchstart="change()">¿Ya tienes cuenta? Inicia Sesión</button></span>
                    </section>
                    <br>    
                </div>`
        }, 500);

        let vi= document.getElementById("vi");
    }else{
        form.style.transform=`rotateZ(-360deg)`
        form.style.height='fit-content'
        form.style.boxShadow='0 0 80px rgba(12, 232, 232, 0.881)'
        form.style.transition=`all 1s ease-in-out`
        title.innerHTML = "CMC | Inicio sesion";
        setTimeout(()=>{
            form.innerHTML=`
                <img src="icon.png" alt="">
                <h1 style="margin:15px 0; z-index: 1;">Iniciar Sesión</h1>
                <div class="container">
                    <label for="username"><b>Usuario</b></label>
                    <input class="in" type="text" placeholder="Ingrese su usuario" name="username" required>
                    
                    <label for="psw"><b>Contraseña</b></label>
                    <div class="pass">
                        <input  id="pass" class="in" type="password" placeholder="Ingrese su contraseña" name="pass" required>
                        <button style="color: white; background-color: transparent; border: 0;"  type="button" onclick="mc()" ontouchstart="mc()"><i id="vi"  class="fa-solid fa-eye"></i></button>
                        
                    </div>
                    <button  class="btn" type="submit">Iniciar sesión</button>
                    
                    <br>
                    <br>
                    <section style="display: flex; text-align: center   ;">
                        <span class="psw"><button type="button" class="a" onclick="change() ontouchstart="change()"">¿No tienes cuenta? Registrate ya</button></span>
                        <span class="psw"><button type="button" class="a">¿Olvidaste tu contraseña?</button></span>
                    </section>
                    <br>    
                </div>	  
                `
        },(500))
        let vi= document.getElementById("vi");

    }
}



