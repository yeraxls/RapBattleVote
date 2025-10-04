import { httpService } from '../Core/httpService.js';
import { EventBus } from '../Core/EventBus.js';
import { EventTypes } from '../Core/EventTypes.js';

export const battlesApi = (() => {
    function getBattles() {
        //return httpService.get('/api/personas');
        console.log("Get battles")
    }

    function getBattlesById(id) {
        //return httpService.get('/api/personas');
        console.log("Get by Id")
    }

    async function saveBattle(battle) {
        const result = await httpService.post("/api/battle/new-battle", battle);
        if (result.success) {
            EventBus.publish(EventTypes.ELEMENT_SAVED, result.data);
            EventBus.publish(EventTypes.BATTLE_ADDED);
        } else {
            EventBus.publish(EventTypes.SHOW_ERRORS, [result.error]);
        }
    }

    function updateBattle(battle) {
        //return httpService.put(`/api/personas/${id}`, persona);
        console.log("actualizar")
    }

    function deleteBattle(id) {
        //return httpService.del(`/api/personas/${id}`);
        console.log("borrar")
    }

    return { getBattles, getBattlesById, saveBattle, updateBattle, deleteBattle };
})();