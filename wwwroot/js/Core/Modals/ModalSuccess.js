import { EventBus } from '../EventBus.js'
EventBus.subscribe("elementSaved", (text) => {
    showSuccessModal(`Elemento guardado: ${text}`);
});

// Función que muestra el modal con el texto que quieras
function showSuccessModal(message) {
    const modalBody = document.getElementById("successModalBody");
    modalBody.textContent = message;

    const modalEl = document.getElementById("successModal");
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
}