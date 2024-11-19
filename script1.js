document.getElementById("forms").addEventListener("submit", function (event) {
    event.preventDefault(); 
    
    const nombre = document.getElementById("nombre").value.trim();
    const pais = document.getElementById("pais").value; // No se utiliza en el resultado actual, pero puede ser útil
    const genero = document.querySelector('input[name="genero"]:checked')?.value || "No especificado";
    const intereses = Array.from(document.querySelectorAll('input[name="intereses"]:checked'))
                           .map(el => el.value);
    
    const resultado = `
        <p><strong>Nombre:</strong> ${nombre || "No especificado"}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Intereses:</strong> ${intereses.length > 0 ? intereses.join(", ") : "Ninguno"}</p>
    `;
    
    document.getElementById("resultado").innerHTML = resultado;
});

document.getElementById("resetear").addEventListener("click", function () {
    document.getElementById("forms").reset();
    document.getElementById("resultado").innerHTML = "";
});
