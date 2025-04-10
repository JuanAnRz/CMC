function mc() {
    let passwordField = document.getElementById("pass");
    if (passwordField.type == "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";

    }

    vi.classList.toggle("fa-eye-slash");
    vi.classList.toggle("fa-eye");
}

//-------------------------------Declaracion de variables y constantes-------------------------------

const vi= document.getElementById("vi");
const title= document.getElementById("title");
const form= document.getElementById("form");
const reg= document.getElementById("reg");
console.log(title.innerText);
function change(){
    if (title.innerText === "CMC | Inicio sesion"){
        title.innerHTML = "CMC | Registro";
        form.innerHTML = `
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
                <button style="color: white; background-color: transparent; border: 0;"  type="button" onclick="mc()"><i id="vi"  class="fa-solid fa-eye"></i></button>
                
            </div>
            <button  class="btn" type="submit">Iniciar Sesion</button>
            
             <br>
             <br>
            <section style="display: flex; text-align: center   ;">
                <span class="psw"><a id="reg">¿Ya tienes cuenta? Inicia Sesión</a></span>
            </section>
            <br>    
        </div>`
        
    }else{
        title.innerHTML = "CMC | Inicio sesion";
        
    }
}

reg.addEventListener("click", change);

