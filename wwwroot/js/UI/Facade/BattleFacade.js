import { BattleModule } from '../Modules/BattleModule.js';
import { BattleFactory } from '../Factories/BattleFactory.js';

// ===============================
// App Facade
// ===============================
export const BattleFacade = (function (Battle) {

    function addBattle(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle) {
        //if (!nombre || nombre.trim() === "") {
        //    console.warn("❌ [VALIDACIÓN] No se puede agregar una persona sin nombre.");
        //    return "Error: nombre inválido";
        //}

        //console.log("✅ [LOG] Agregando persona:", nombre);
        const battle = BattleFactory.create(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle);
        return Battle.add(battle);
    }

    function searchBattle(nombre) {
        console.log("🔍 [LOG] Buscando batalla:", nombre);
        return Battle.search(nombre);
    }

    function listBattle() {
        console.log("📋 [LOG] Listando personas");
        return Battle.list();
    }

    // Interfaz pública
    return {
        addBattle, searchBattle, listBattle
    };

})(BattleModule);

