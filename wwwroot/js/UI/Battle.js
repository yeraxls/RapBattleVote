// ===============================
// EventBus (Observer centralizado)
// ===============================
const EventBus = (function () {
    const events = {};

    function subscribe(event, callback) {
        if (!events[event]) events[event] = [];
        events[event].push(callback);
    }

    function publish(event, data) {
        if (!events[event]) return;
        events[event].forEach(callback => callback(data));
    }

    return {
        subscribe,
        publish
    };
})();

// ===============================
// Battle Module
// ===============================
const BattleModule = (function () {

    function addBattle(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle) {
        const battle = BattleFactory.create(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle);
        EventBus.publish("battleAdded", battle); // notifica
    }

    function listBattle() { return personas; }

    function searchBattle(nombre) {
        const index = UtilsModule.busqueda(personas.map(p => p.nombre), nombre);
        return index >= 0 ? personas[index] : "No encontrada";
    }

    return { add: addBattle, list: listBattle, search: searchBattle };
})();

// ===============================
// Battle Factory
// ===============================
const BattleFactory = (function () {
    return {
        create: function (title, Description, Rapper1, Rapper2, VideoUrl, Date) {
            return { title, Description, Rapper1, Rapper2, VideoUrl, Date };
        }
    };
})();

// ===============================
// App Facade
// ===============================
const AppFacade = (function (Battle) {

    function addBattle(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle) {
        //if (!nombre || nombre.trim() === "") {
        //    console.warn("❌ [VALIDACIÓN] No se puede agregar una persona sin nombre.");
        //    return "Error: nombre inválido";
        //}

        //console.log("✅ [LOG] Agregando persona:", nombre);
        return Battle.add(title, Description, Rapper1, Rapper2, VideoUrl, DateBattle);
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

EventBus.subscribe("battleAdded", (battle) => {
    $("#title").val("")
    $("#description").val("")
    $("#rapper1").val("")
    $("#rapper2").val("")
    $("#videoUrl").val("")
    $("#date").val("")
});
document.getElementById("btnAddBattle").addEventListener("click", function () {
    let title = $("#title").val()
    let description = $("#description").val()
    let rapper1 = $("#rapper1").val()
    let rapper2 = $("#rapper2").val()
    let videoUrl = $("#videoUrl").val()
    let dateBattle = $("#date").val()
    
    AppFacade.addBattle(title, description, rapper1, rapper2, videoUrl, dateBattle)
    //const nombre = "Persona " + (PersonasModule.listar().length + 1);
    //PersonasModule.agregar(nombre);
});