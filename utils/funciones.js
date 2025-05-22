import Swal from "sweetalert2";

export function generarToken() {
    return Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2) + Math.random().toString(36).substring(2)
}

export function alertaRedireccion(titulo, mensaje, icono, ruta){
    let timerInterval;
    Swal.fire({
        title: titulo,
        html: mensaje + " <b></b>",
        timer: 2000,
        timerProgressBar: true,
        icon: icono,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            window.location.href = ruta
        }
    })
}