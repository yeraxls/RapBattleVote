import { BattleFacade } from '../Facade/BattleFacade.js'
import { EventBus } from '../../Core/EventBus.js'

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

    BattleFacade.addBattle(title, description, rapper1, rapper2, videoUrl, dateBattle)
});