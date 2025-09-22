import { EventBus } from '../../Core/EventBus.js';
import { battlesApi } from '../../Api/battleApi.js'
// ===============================
// Battle Module
// ===============================
export const BattleModule = (function () {

    function addBattle(battle) {
        battlesApi.saveBattle(battle)
        EventBus.publish("battleAdded", battle); // notifica
    }

    function listBattle() { return personas; }

    function searchBattle(nombre) {
        const index = UtilsModule.busqueda(personas.map(p => p.nombre), nombre);
        return index >= 0 ? personas[index] : "No encontrada";
    }

    return { add: addBattle, list: listBattle, search: searchBattle };
})();