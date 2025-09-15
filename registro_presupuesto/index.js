const form = document.getElementById('formPresupuesto');
const lista = document.getElementById('listaPropuestas');

const countWait = document.getElementById('countWait');
const countOk = document.getElementById('countOk');
const countNo = document.getElementById('countNo');

let espera = 1, aprobados = 1, rechazados = 1;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('proyecto').value;
    const grupo = document.getElementById('grupo').value;
    const fecha = document.getElementById('fecha').value;

    // Nueva propuesta (por defecto en espera)
    const div = document.createElement('div');
    div.classList.add('propuesta');
    div.innerHTML = `
        <h4>${nombre}</h4>
        <p><strong>Grupo:</strong> ${grupo}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Estado:</strong> <span class="badge wait">En espera</span></p>
      `;

    lista.prepend(div); // agrega arriba
    espera++;
    countWait.textContent = espera;

    form.reset();
});