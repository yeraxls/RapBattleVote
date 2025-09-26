import { BattleModule } from '../Modules/BattleModule.js';
import { BattleFactory } from '../Factories/BattleFactory.js';
import { validateBattle } from '../Validations/battleValidations.js'
import { EventBus } from '../../Core/EventBus.js'

// ===============================
// App Facade
// ===============================
export const BattleFacade = (function (Battle) {

    function addBattle(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle) {
        const battle = BattleFactory.create(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle);
        const errors = validateBattle(battle);
        if (errors.length > 0) {
            EventBus.publish("showErrors", errors);
            return;
        }

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

