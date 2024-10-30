function mostrar(valor) {
    document.getElementById('display').value += valor;
}

function borrar() {
    document.getElementById('display').value = "";
}

function calcular() {
    const display = document.getElementById('display');
    try {
        let resultado = eval(display.value);

        if (resultado === undefined) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "El resultado es undefined.",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return;
        }

        display.value = resultado;
    } catch {
        display.value = "Error";
    }
}
