import { httpService } from '../Core/httpService.js';

export const battlesApi = (() => {
    function getBattles() {
        //return httpService.get('/api/personas');
        console.log("Get battles")
    }

    function getBattlesById(id) {
        //return httpService.get('/api/personas');
        console.log("Get by Id")
    }

    function saveBattle(battle) {
        //return httpService.post('/api/personas', persona);
        console.log("guardar")
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