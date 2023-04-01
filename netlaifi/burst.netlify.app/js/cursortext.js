! function() {
    var e = "W DEVICE";
    if ((window.addEventListener || window.attachEvent) && document.createElement) {
        var t = (e = e.split("")).length - 1,
            n = Math.round(33.6),
            o = 20,
            d = 1 * n + 20,
            a = 1 * n + 20,
            i = [],
            c = [],
            l = [],
            s = [],
            m = document.createElement("div"),
            p = document.createElement("div"),
            r = document.compatMode && "BackCompat" != document.compatMode ? document.documentElement : document.body,
            u = function(e) {
                e = e || window.event, d = isNaN(e.pageY) ? e.clientY : e.pageY, a = isNaN(e.pageX) ? e.clientX : e.pageX
            },
            w = function() {
                i[0] = l[0] += 8 * (d - l[0]), c[0] = s[0] += 8 * (a - 20 - s[0]);
                for (var e = t; e > 0; --e) i[e] = l[e] += 8 * (i[e - 1] - l[e]), c[e] = s[e] += 8 * (c[e - 1] - s[e]);
                ! function() {
                    v.nopy && (m.style.top = (r || document.body).scrollTop + "px", m.style.left = (r || document.body).scrollLeft + "px"), o -= .8;
                    for (var e, d = t; d > -1; --d)(e = document.getElementById("iemsg" + d).style).top = Math.round(i[d] + n * Math.sin((o + d) / 34) * 1 - 15) + "px", e.left = Math.round(c[d] + n * Math.cos((o + d) / 34) * 1) + "px"
                }()
            },
            v = function() {
                isNaN(window.pageYOffset) ? v.nopy = !0 : (d += window.pageYOffset, a += window.pageXOffset);
                for (var o, r = t; r > -1; --r)(o = document.createElement("div")).id = "iemsg" + r, o.style.height = o.style.width = n + "px", o.appendChild(document.createTextNode(e[r])), p.appendChild(o), i[r] = c[r] = l[r] = s[r] = 0;
                m.appendChild(p), document.body.appendChild(m), setInterval(w, 25)
            },
            f = function() {
                d += window.pageYOffset, a += window.pageXOffset, window.removeEventListener("scroll", f, !1)
            };
        m.id = "outerCircleText", m.style.fontSize = "14px", window.addEventListener ? (window.addEventListener("load", v, !1), document.addEventListener("mouseover", u, !1), document.addEventListener("mousemove", u, !1), /Apple/.test(navigator.vendor) && window.addEventListener("scroll", f, !1)) : window.attachEvent && (window.attachEvent("onload", v), document.attachEvent("onmousemove", u))
    }
}();