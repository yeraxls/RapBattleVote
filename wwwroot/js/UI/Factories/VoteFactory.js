// ===============================
// Battle Factory
// ===============================
export const VoteFactory = (function () {
    return {
        create: function (battleId, rapper) {
            return { battleId, rapper };
        }
    };
})();