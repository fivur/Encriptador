function encriptar() {
    let texto = document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("output-text").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("output-text").value = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

document.getElementById('input-text').addEventListener('input', function() {
    var input = this.value;
    var errorMessage = document.getElementById('error-message');

    // Expresión regular para detectar mayúsculas y caracteres especiales
    var regex = /[A-Z!@#$%^&*(),.?":{}|<>]/;

    if (regex.test(input)) {
        errorMessage.classList.remove('hidden');
    } else {
        errorMessage.classList.add('hidden');
    }
});

