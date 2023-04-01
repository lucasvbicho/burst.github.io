console.log("burstownsu ; burst.ware :skull:");
let counter = 0,
    Title = ".gg/naVjJspDnY",
    direction = !0;

function audioPlay() {
    var e = document.getElementById("audio");
    e.volume = .3, e.play()
}

function videoPlay() {
    document.getElementById("video").play()
}
aniTitle = setInterval((function() {
    counter == Title.length && (direction = !1), 0 == counter && (direction = !0), counter = 1 == direction ? ++counter : --counter, newtitle = 0 == counter ? "" : Title.slice(0, counter), document.title = "" + newtitle
}), 400), window.oncontextmenu = function() {
    return !1
}, $(document).keydown((function(e) {
    return 123 != e.keyCode && (!(e.ctrlKey && e.shiftKey && 73 == e.keyCode || e.ctrlKey && e.shiftKey && 74 == e.keyCode) && void 0)
}));