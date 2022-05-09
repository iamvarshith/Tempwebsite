HRHelper = {
    _init: function () {
        HRHelper._setQueryParams(".hr__link-add-query-params .fl-button"), HRHelper._setCookieFromUrlParam("gclid")
    }, _setCookie: function (e, r, t) {
        var n = "";
        if (!e && !r) return !1;
        if (t) {
            var o = new Date;
            o.setTime(o.getTime() + 24 * t * 60 * 60 * 1e3), n = "; expires=" + o.toGMTString()
        }
        document.cookie = e + "=" + r + n + "; path=/"
    }, _getCookie: function (e) {
        var r = document.cookie, t = e + "=", n = r.indexOf("; " + t), o = "";
        if (-1 == n) {
            if (0 != (n = r.indexOf(t))) return null
        } else n += 2, -1 == (o = document.cookie.indexOf(";", n)) && (o = r.length);
        return decodeURI(r.substring(n + t.length, o))
    }, _setQueryParams: function (e) {
        var r = window.location.search, t = document.querySelectorAll(e);
        if (r && t.length) {
            var n = new URLSearchParams(r), o = new URLSearchParams(""),
                i = ["utm_campaign", "utm_source", "utm_medium", "utm_content", "utm_term", "utm_partner"];
            n.forEach(function (e, r) {
                i.includes(r) && o.append(r, e)
            });
            var a = o.toString();
            if (a) for (var c = 0; c < t.length; c++) t[c].href = t[c].href.split("?")[0] + "?" + a
        }
    }, _getUrlParam: function (e) {
        var r = RegExp("[?&]" + e + "=([^&]*)").exec(window.location.search);
        return r && decodeURIComponent(r[1].replace(/\+/g, ""))
    }, _setCookieFromUrlParam: function (e) {
        if (window.location.search) {
            var r = HRHelper._getUrlParam(e);
            r && HRHelper._setCookie(e, r, 90)
        }
    }
}, HRHelper._init();