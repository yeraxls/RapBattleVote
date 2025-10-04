import { voteApi } from '../../Api/voteApi.js'
// ===============================
// Battle Module
// ===============================
export const VoteModule = (function () {
    function voteBattle(vote) {
        voteApi.voteBattle(vote)
    }
    
    return { voteBattle };
})();