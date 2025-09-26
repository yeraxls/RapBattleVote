// ===============================
// Battle Factory
// ===============================
export const BattleFactory = (function () {
    return {
        create: function (title, description, rapper1, rapper2, videoUrl, date) {
            return { title, description, rapper1, rapper2, videoUrl, date };
        }
    };
})();