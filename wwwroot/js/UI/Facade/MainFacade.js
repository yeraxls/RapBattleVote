import { BattleModule } from '../Modules/BattleModule.js';
import { VoteModule } from '../Modules/VoteModule.js';
import { BattleFactory } from '../Factories/BattleFactory.js';
import { VoteFactory } from '../Factories/VoteFactory.js';
import { validateBattle } from '../Validations/battleValidations.js'
import { EventBus } from '../../Core/EventBus.js'

// ===============================
// App Facade
// ===============================
export const MainFacade = (function (Battle) {

    function addBattle(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle) {
        const battle = BattleFactory.create(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle);
        const errors = validateBattle(battle);
        if (errors.length > 0) {
            EventBus.publish("showErrors", errors);
            return;
        }

        Battle.add(battle);
    }

    function searchBattle(nombre) {
        console.log("🔍 [LOG] Buscando batalla:", nombre);
        return Battle.search(nombre);
    }

    function listBattle() {
        console.log("📋 [LOG] Listando personas");
        return Battle.list();
    }

    function voteBattle(battleId, rapper) {
        var vote = VoteFactory.create(battleId, rapper)
        VoteModule.voteBattle(vote)
    }

    // Interfaz pública
    return {
        addBattle, voteBattle
    };

})(BattleModule);

