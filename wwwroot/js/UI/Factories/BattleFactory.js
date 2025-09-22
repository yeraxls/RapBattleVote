// ===============================
// Battle Factory
// ===============================
export const BattleFactory = (function () {
    return {
        create: function (title, Description, Rapper1, Rapper2, VideoUrl, Date) {
            return { title, Description, Rapper1, Rapper2, VideoUrl, Date };
        }
    };
})();