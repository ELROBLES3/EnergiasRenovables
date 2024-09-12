// Obtener los elementos
const modal = document.getElementById('modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const modalResult = document.getElementById('modalResult');

// Abrir el modal
openModalBtn.onclick = function() {
    modal.style.display = 'block';
}

// Cerrar el modal
closeModalBtn.onclick = function() {
    modal.style.display = 'none';
    modalResult.innerHTML = ''; // Limpiar el resultado cuando se cierra el modal
}

// Opción de Sí: redirige a otra página
yesBtn.onclick = function() {
    window.location.href = 'registro.html'; // Reemplaza con la URL a la que quieras redirigir
}

// Opción de No: cierra el modal
noBtn.onclick = function() {
    modal.style.display = 'none'; // Cierra el modal sin redirigir
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
        modalResult.innerHTML = ''; // Limpiar el resultado cuando se cierra el modal
    }
}
