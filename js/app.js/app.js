document.addEventListener('DOMContentLoaded', iniciarApp);

function iniciarApp() {
    const horariosDiv = document.querySelector('#horarios');
    const gruposDiv = document.querySelector('#grupos');

    if (horariosDiv) {
        obtenerHorarios();
    }

    if (gruposDiv) {
        obtenerGrupos();
    }
}

function obtenerHorarios() {
    const horarios = [
        { dia: "Lunes", hora: "08:00 AM" },
        { dia: "Miércoles", hora: "06:00 PM" },
        { dia: "Viernes", hora: "07:30 PM" },
        { dia: "Domingo", hora: "10:00 AM" },
    ];

    mostrarHorarios(horarios);
}

function mostrarHorarios(horarios) {
    const horariosDiv = document.querySelector('#horarios');

    horarios.forEach(horario => {
        const div = document.createElement('div');
        div.classList.add('col-md-3', 'text-center', 'mb-4');
        div.innerHTML = `
            <div class="card p-3">
                <h3>${horario.dia}</h3>
                <p>${horario.hora}</p>
            </div>
        `;
        horariosDiv.appendChild(div);
    });
}

function obtenerGrupos() {
    const grupos = [
        { nombre: "Niños de 6 a 8 años", horario: "Sábados 10:00 AM" },
        { nombre: "Niños de 9 a 12 años", horario: "Sábados 11:30 AM" },
        { nombre: "Jóvenes 13 a 17 años", horario: "Domingos 5:00 PM" },
    ];

    mostrarGrupos(grupos);
}

function mostrarGrupos(grupos) {
    const gruposDiv = document.querySelector('#grupos');

    grupos.forEach(grupo => {
        const div = document.createElement('div');
        div.classList.add('col-md-4', 'text-center', 'mb-4');
        div.innerHTML = `
            <div class="card p-3">
                <h3>${grupo.nombre}</h3>
                <p>${grupo.horario}</p>
            </div>
        `;
        gruposDiv.appendChild(div);
    });
}
