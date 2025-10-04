import { httpService } from '../Core/httpService.js';
import { EventBus } from '../Core/EventBus.js';
import { EventTypes } from '../Core/EventTypes.js';

export const voteApi = (() => {
    async function voteBattle(vote) {
        const result = await httpService.post("/api/Vote/vote", vote);
        //EventBus.publish(EventTypes.BATTLE_VOTED, result);
        EventBus.publish(EventTypes.ELEMENT_SAVED, result.data);
    }
    return { voteBattle };
})();