import { isEmpty } from "../../Core/validations/stringValidations.js";
import { isFutureDate } from "../../Core/validations/dateValidations.js";

export function validateBattle(battle) {
    const errors = [];

    if (isEmpty(battle.title)) {
        errors.push("El titulo es obligatorio.");
    }

    if (isEmpty(battle.rapper1) || isEmpty(battle.rapper2)) {
        errors.push("Debes indicar dos raperos.");
    }

    if (battle.rapper1 === battle.rapper2) {
        errors.push("Los dos raperos deben ser diferentes.");
    }

    if (!isFutureDate(battle.date)) {
        errors.push("La fecha debe ser futura.");
    }

    return errors;
}