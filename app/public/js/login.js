const logueo =  async()=>{
    const correo = document.getElementById("correo").value;
    const contrasena = document.getElementById("contrasena").value;
    const url = document.getElementById("url").value;

    sessionStorage.setItem("portatilplus", url);

    const portatilplus = sessionStorage.getItem("portatilplus")+"/" ;

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
            },
        body: JSON.stringify({
            correo: correo,
            contrasena: contrasena
        })
    }

    await fetch(portatilplus, options)
    .then(res => res.json())
    .then(data=>{
        if(data.error== true){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Correo o Contraseña Incorrecta!",
              });
        }else{

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Bienvenido",
                showConfirmButton: false,
                timer: 1500
            });
            sessionStorage.setItem("token", data.body.token);
                setTimeout(function () {
                    window.location.href = "/dash";
                }, 1000);
            
        }
    })
    .catch(err=>{
        console.error("error en el fetch", err);
    })
    
}