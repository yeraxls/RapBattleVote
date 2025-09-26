import { EventBus } from '../EventBus.js'
function showErrors(errors) {
    const errorList = document.getElementById("errorList");
    errorList.innerHTML = "";

    errors.forEach(err => {
        const li = document.createElement("li");
        li.textContent = err;
        li.classList.add("text-danger", "mb-1");
        errorList.appendChild(li);
    });

    const modal = new bootstrap.Modal(document.getElementById("errorModal"));
    modal.show();
}
EventBus.subscribe("showErrors", showErrors);