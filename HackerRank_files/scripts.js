var els = {
    navIcon: document.getElementById("js-nav-button"),
    navIconSecondary: document.getElementById("js-nav-button-secondary"),
    nav: document.getElementById("site-navigation"),
    burgerLine: document.querySelector(".burger__line")
};

function toggleMenu() {
    return els.navIcon.classList.toggle("hr__mobile-menu-toggle--open"), els.nav.classList.toggle("main-navigation--visible"), !1
}

els.navIcon && els.navIcon.addEventListener("click", toggleMenu), els.navIconSecondary && els.navIconSecondary.addEventListener("click", toggleMenu);
var h = document.getElementById("header-sticky"), content = document.getElementById("primary"), stuck = !1,
    stickPoint = getDistance(h);

function getDistance(e) {
    if (e) return e.offsetTop
}

function createFunctionWithTimeout(e, t) {
    var i = !1;

    function n() {
        i || (i = !0, e())
    }

    return setTimeout(n, t || 0), n
}

function get_bb_row_position(e) {
    return bb_row = e.parents(".fl-row"), bb_row.length ? "body_section" + (bb_row.index() + 1) : ""
}

function hr__addTrackClickEvent(e) {
    e.length && jQuery(e).each(function () {
        var e = jQuery(this), t = e.attr("href");
        e.is("a") && !t.startsWith("#") && 0 < t.length && jQuery(this).on("click", function (e) {
            var t = jQuery(this), i = {};
            t.attr("target") || e.preventDefault(), i.event_category = t.data("event-category") ? t.data("event-category") : "", t.data("event-subcategory") && (i["Event Category 2"] = t.data("event-subcategory")), t.data("event-file-type") && (i["Event File Type"] = t.data("event-file-type")), t.data("campaign") && (i.event_action = t.data("campaign")), t.data("property-id") && (i.send_to = t.data("property-id")), t.data("event-label") && (i.event_label = t.data("event-label")), i["Location URL"] = window.location.href.split(/[?#]/)[0], i.event_callback = createFunctionWithTimeout(function () {
                t.attr("target") || t.hasClass("fl-button-lightbox") || (window.location.href = t.attr("href"))
            }), t.not(".hr__tracked_link").length && (i.event_category = t.data("event-category") ? t.data("event-category") : "Default", i.event_action = t.data("event-action") ? t.data("event-action") : t.contents().filter(function () {
                return void 0 !== this.innerText || 3 === this.nodeType
            }).text().trim(), i.event_label = t.data("event-label") ? t.data("event-label") : get_bb_row_position(t)), void 0 !== window.dataLayer && (i.event = "click", window.dataLayer.push(i))
        })
    })
}

function _toConsumableArray(e) {
    if (Array.isArray(e)) {
        for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
        return i
    }
    return Array.from(e)
}

window.onscroll = function (e) {
    var t = getDistance(h) - window.pageYOffset, i = window.pageYOffset;
    t <= 0 && !stuck ? (document.body.classList.add("header-sticky"), stuck = !0) : stuck && i <= stickPoint && (document.body.classList.remove("header-sticky"), stuck = !1)
}, jQuery(document).ready(function (e) {
    hr__addTrackClickEvent(".fl-builder-content a:not(.bx-pager-link)"), hr__addTrackClickEvent('.hr__site-header .menu-item:not(".menu-item-has-children") a'), hr__addTrackClickEvent(".hr__site-footer .menu-item a"), hr__addTrackClickEvent(".hr__top-bar a"), hr__addTrackClickEvent(".hr__site-header a.custom-logo-link")
}), function (e) {
    ("object" != typeof exports || "undefined" == typeof module) && "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    "use strict";

    function e(t) {
        var r = !0, i = !1, n = null, s = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0
        };

        function a(e) {
            return e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
        }

        function o(e) {
            e.classList.contains("focus-visible") || (e.classList.add("focus-visible"), e.setAttribute("data-focus-visible-added", ""))
        }

        function e(e) {
            r = !1
        }

        function l() {
            document.addEventListener("mousemove", u), document.addEventListener("mousedown", u), document.addEventListener("mouseup", u), document.addEventListener("pointermove", u), document.addEventListener("pointerdown", u), document.addEventListener("pointerup", u), document.addEventListener("touchmove", u), document.addEventListener("touchstart", u), document.addEventListener("touchend", u)
        }

        function u(e) {
            e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (r = !1, document.removeEventListener("mousemove", u), document.removeEventListener("mousedown", u), document.removeEventListener("mouseup", u), document.removeEventListener("pointermove", u), document.removeEventListener("pointerdown", u), document.removeEventListener("pointerup", u), document.removeEventListener("touchmove", u), document.removeEventListener("touchstart", u), document.removeEventListener("touchend", u))
        }

        document.addEventListener("keydown", function (e) {
            e.metaKey || e.altKey || e.ctrlKey || (a(t.activeElement) && o(t.activeElement), r = !0)
        }, !0), document.addEventListener("mousedown", e, !0), document.addEventListener("pointerdown", e, !0), document.addEventListener("touchstart", e, !0), document.addEventListener("visibilitychange", function (e) {
            "hidden" == document.visibilityState && (i && (r = !0), l())
        }, !0), l(), t.addEventListener("focus", function (e) {
            var t, i, n;
            a(e.target) && (r || (i = (t = e.target).type, "INPUT" == (n = t.tagName) && s[i] && !t.readOnly || "TEXTAREA" == n && !t.readOnly || t.isContentEditable)) && o(e.target)
        }, !0), t.addEventListener("blur", function (e) {
            a(e.target) && (e.target.classList.contains("focus-visible") || e.target.hasAttribute("data-focus-visible-added")) && (i = !0, window.clearTimeout(n), n = window.setTimeout(function () {
                i = !1, window.clearTimeout(n)
            }, 100), (e = e.target).hasAttribute("data-focus-visible-added") && (e.classList.remove("focus-visible"), e.removeAttribute("data-focus-visible-added")))
        }, !0), t.nodeType === Node.DOCUMENT_FRAGMENT_NODE && t.host ? t.host.setAttribute("data-js-focus-visible", "") : t.nodeType === Node.DOCUMENT_NODE && document.documentElement.classList.add("js-focus-visible")
    }

    if ("undefined" != typeof window && "undefined" != typeof document) {
        var t;
        window.applyFocusVisiblePolyfill = e;
        try {
            t = new CustomEvent("focus-visible-polyfill-ready")
        } catch (e) {
            (t = document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready", !1, !1, {})
        }
        window.dispatchEvent(t)
    }
    "undefined" != typeof document && e(document)
}), function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {
    }

    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {}, e = i[e] = i[e] || [];
            return -1 == e.indexOf(t) && e.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function (e, t) {
        e = this._events && this._events[e];
        if (e && e.length) {
            t = e.indexOf(t);
            return -1 != t && e.splice(t, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], r = 0; r < i.length; r++) {
                var s = i[r];
                n && n[s] && (this.off(e, s), delete n[s]), s.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}), function (t, i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (e) {
        return i(t, e)
    }) : "object" == typeof module && module.exports ? module.exports = i(t, require("ev-emitter")) : t.imagesLoaded = i(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function (t, e) {
    function s(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function a(e, t, i) {
        if (!(this instanceof a)) return new a(e, t, i);
        var n, r = e;
        return (r = "string" == typeof e ? document.querySelectorAll(e) : r) ? (this.elements = (n = r, Array.isArray(n) ? n : "object" == typeof n && "number" == typeof n.length ? u.call(n) : [n]), this.options = s({}, this.options), "function" == typeof t ? i = t : s(this.options, t), i && this.on("always", i), this.getImages(), o && (this.jqDeferred = new o.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (r || e))
    }

    function i(e) {
        this.img = e
    }

    function n(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }

    var o = t.jQuery, l = t.console, u = Array.prototype.slice;
    (a.prototype = Object.create(e.prototype)).options = {}, a.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, a.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var r = i[n];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) for (var s = e.querySelectorAll(this.options.background), n = 0; n < s.length; n++) {
                var a = s[n];
                this.addElementBackgroundImages(a)
            }
        }
    };
    var d = {1: !0, 9: !0, 11: !0};
    return a.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
            var r = n && n[2];
            r && this.addBackground(r, e), n = i.exec(t.backgroundImage)
        }
    }, a.prototype.addImage = function (e) {
        e = new i(e);
        this.images.push(e)
    }, a.prototype.addBackground = function (e, t) {
        t = new n(e, t);
        this.images.push(t)
    }, a.prototype.check = function () {
        function t(e, t, i) {
            setTimeout(function () {
                n.progress(e, t, i)
            })
        }

        var n = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, a.prototype.progress = function (e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, e, t)
    }, a.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred && (e = this.hasAnyBroken ? "reject" : "resolve", this.jqDeferred[e](this))
    }, (i.prototype = Object.create(e.prototype)).check = function () {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
    }, i.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, i.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, i.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, i.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, i.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, (n.prototype = Object.create(i.prototype)).check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, n.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, n.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, (a.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) && ((o = e).fn.imagesLoaded = function (e, t) {
            return new a(this, e, t).jqDeferred.promise(o(this))
        })
    })(), a
}), function (e, t, i) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return i(e, 0, t), e.mobile
    }) : i(e.jQuery, 0, t)
}(this, document, function (e, t, i, n) {
    !function (d, e) {
        function c(e) {
            for (; e && void 0 !== e.originalEvent;) e = e.originalEvent;
            return e
        }

        function s(e) {
            for (var t, i, n = {}; e;) {
                for (i in t = d.data(e, y)) t[i] && (n[i] = n.hasVirtualBinding = !0);
                e = e.parentNode
            }
            return n
        }

        function n() {
            M = !0
        }

        function r() {
            M = !1
        }

        function a() {
            o(), k = setTimeout(function () {
                L = k = 0, I.length = 0, P = !1, n()
            }, d.vmouse.resetTimerDuration)
        }

        function o() {
            k && (clearTimeout(k), k = 0)
        }

        function l(e, t, i) {
            var n;
            return (i && i[e] || !i && function (e, t) {
                for (var i; e;) {
                    if ((i = d.data(e, y)) && (!t || i[t])) return e;
                    e = e.parentNode
                }
            }(t.target, e)) && (n = function (e, t) {
                var i, n, r, s, a, o, l, u = e.type;
                if ((e = d.Event(e)).type = t, i = e.originalEvent, n = d.event.props, -1 < u.search(/^(mouse|click)/) && (n = E), i) for (a = n.length; a;) e[r = n[--a]] = i[r];
                if (-1 < u.search(/mouse(down|up)|click/) && !e.which && (e.which = 1), -1 !== u.search(/^touch/) && (u = (t = c(i)).touches, t = t.changedTouches, s = u && u.length ? u[0] : t && t.length ? t[0] : void 0)) for (o = 0, l = b.length; o < l; o++) e[r = b[o]] = s[r];
                return e
            }(t, e), d(t.target).trigger(n)), n
        }

        function u(e) {
            var t = d.data(e.target, w);
            P || L && L === t || (t = l("v" + e.type, e)) && (t.isDefaultPrevented() && e.preventDefault(), t.isPropagationStopped() && e.stopPropagation(), t.isImmediatePropagationStopped() && e.stopImmediatePropagation())
        }

        function h(e) {
            var t, i = c(e).touches;
            !i || 1 !== i.length || (i = s(t = e.target)).hasVirtualBinding && (L = V++, d.data(t, w, L), o(), r(), A = !1, t = c(e).touches[0], T = t.pageX, x = t.pageY, l("vmouseover", e, i), l("vmousedown", e, i))
        }

        function p(e) {
            M || (A || l("vmousecancel", e, s(e.target)), A = !0, a())
        }

        function f(e) {
            var t, i, n, r;
            M || (t = c(e).touches[0], i = A, n = d.vmouse.moveDistanceThreshold, r = s(e.target), (A = A || Math.abs(t.pageX - T) > n || Math.abs(t.pageY - x) > n) && !i && l("vmousecancel", e, r), l("vmousemove", e, r), a())
        }

        function m(e) {
            var t, i;
            M || (n(), l("vmouseup", e, t = s(e.target)), A || (i = l("vclick", e, t)) && i.isDefaultPrevented() && (i = c(e).changedTouches[0], I.push({
                touchID: L,
                x: i.clientX,
                y: i.clientY
            }), P = !0), l("vmouseout", e, t), A = !1, a())
        }

        function g(e) {
            var t, i = d.data(e, y);
            if (i) for (t in i) if (i[t]) return 1
        }

        function v() {
        }

        var _, t, y = "virtualMouseBindings", w = "virtualTouchID",
            i = "vmouseover vmousedown vmousemove vmouseup vclick vmouseout vmousecancel".split(" "),
            b = "clientX clientY pageX pageY screenX screenY".split(" "),
            C = d.event.mouseHooks ? d.event.mouseHooks.props : [], E = d.event.props.concat(C), F = {}, k = 0, T = 0,
            x = 0, A = !1, I = [], P = !1, M = !1, D = "addEventListener" in e, S = d(e), V = 1, L = 0;
        for (d.vmouse = {
            moveDistanceThreshold: 10,
            clickDistanceThreshold: 10,
            resetTimerDuration: 1500
        }, t = 0; t < i.length; t++) d.event.special[i[t]] = function (i) {
            var n = i.substr(1);
            return {
                setup: function () {
                    g(this) || d.data(this, y, {}), d.data(this, y)[i] = !0, F[i] = (F[i] || 0) + 1, 1 === F[i] && S.bind(n, u), d(this).bind(n, v), D && (F.touchstart = (F.touchstart || 0) + 1, 1 === F.touchstart && S.bind("touchstart", h).bind("touchend", m).bind("touchmove", f).bind("scroll", p))
                }, teardown: function () {
                    --F[i], F[i] || S.unbind(n, u), D && (--F.touchstart, F.touchstart || S.unbind("touchstart", h).unbind("touchmove", f).unbind("touchend", m).unbind("scroll", p));
                    var e = d(this), t = d.data(this, y);
                    t && (t[i] = !1), e.unbind(n, v), g(this) || e.removeData(y)
                }
            }
        }(i[t]);
        D && e.addEventListener("click", function (e) {
            var t, i, n, r, s, a = I.length, o = e.target;
            if (a) for (t = e.clientX, i = e.clientY, _ = d.vmouse.clickDistanceThreshold, n = o; n;) {
                for (r = 0; r < a; r++) if (s = I[r], n === o && Math.abs(s.x - t) < _ && Math.abs(s.y - i) < _ || d.data(n, w) === s.touchID) return e.preventDefault(), void e.stopPropagation();
                n = n.parentNode
            }
        }, !0)
    }(e, i)
});
var swiper, _slice = Array.prototype.slice, _slicedToArray = function (e, t) {
    if (Array.isArray(e)) return e;
    if (Symbol.iterator in Object(e)) return function (e, t) {
        var i = [], n = !0, r = !1, s = void 0;
        try {
            for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done) && (i.push(a.value), !t || i.length !== t); n = !0) ;
        } catch (e) {
            r = !0, s = e
        } finally {
            try {
                !n && o.return && o.return()
            } finally {
                if (r) throw s
            }
        }
        return i
    }(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
}, _extends = Object.assign || function (e) {
    for (var t = 1; t < arguments.length; t++) {
        var i, n = arguments[t];
        for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
};
!function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.parsley = t(e.jQuery)
}(this, function (l) {
    "use strict";

    function n(t, i) {
        return t.parsleyAdaptedCallback || (t.parsleyAdaptedCallback = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            e.unshift(this), t.apply(i || P, e)
        }), t.parsleyAdaptedCallback
    }

    function r(e) {
        return 0 === e.lastIndexOf(M, 0) ? e.substr(M.length) : e
    }

    function s() {
        this.__id__ = o.generateID()
    }

    var e = 1, t = {}, o = {
        attr: function (e, t, i) {
            var n, r, s, a = new RegExp("^" + t, "i");
            if (void 0 === i) i = {}; else for (n in i) i.hasOwnProperty(n) && delete i[n];
            if (!e) return i;
            for (n = (s = e.attributes).length; n--;) (r = s[n]) && r.specified && a.test(r.name) && (i[this.camelize(r.name.slice(t.length))] = this.deserializeValue(r.value));
            return i
        }, checkAttr: function (e, t, i) {
            return e.hasAttribute(t + i)
        }, setAttr: function (e, t, i, n) {
            e.setAttribute(this.dasherize(t + i), String(n))
        }, getType: function (e) {
            return e.getAttribute("type") || "text"
        }, generateID: function () {
            return "" + e++
        }, deserializeValue: function (t) {
            var e;
            try {
                return t && ("true" == t || "false" != t && ("null" == t ? null : isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? JSON.parse(t) : t : e))
            } catch (e) {
                return t
            }
        }, camelize: function (e) {
            return e.replace(/-+(.)?/g, function (e, t) {
                return t ? t.toUpperCase() : ""
            })
        }, dasherize: function (e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        }, warn: function () {
            var e;
            window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments)
        }, warnOnce: function (e) {
            t[e] || (t[e] = !0, this.warn.apply(this, arguments))
        }, _resetWarnings: function () {
            t = {}
        }, trimString: function (e) {
            return e.replace(/^\s+|\s+$/g, "")
        }, parse: {
            date: function (e) {
                var t = e.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
                if (!t) return null;
                var i = t.map(function (e) {
                    return parseInt(e, 10)
                }), n = _slicedToArray(i, 4), e = (n[0], n[1]), t = n[2], i = n[3];
                return (n = new Date(e, t - 1, i)).getFullYear() !== e || n.getMonth() + 1 !== t || n.getDate() !== i ? null : n
            }, string: function (e) {
                return e
            }, integer: function (e) {
                return isNaN(e) ? null : parseInt(e, 10)
            }, number: function (e) {
                if (isNaN(e)) throw null;
                return parseFloat(e)
            }, boolean: function (e) {
                return !/^\s*false\s*$/i.test(e)
            }, object: function (e) {
                return o.deserializeValue(e)
            }, regexp: function (e) {
                var t = "";
                return e = /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"), e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : "^" + e + "$", new RegExp(e, t)
            }
        }, parseRequirement: function (e, t) {
            var i = this.parse[e || "string"];
            if (!i) throw'Unknown requirement specification: "' + e + '"';
            i = i(t);
            if (null === i) throw"Requirement is not a " + e + ': "' + t + '"';
            return i
        }, namespaceEvents: function (e, t) {
            return (e = this.trimString(e || "").split(/\s+/))[0] ? l.map(e, function (e) {
                return e + "." + t
            }).join(" ") : ""
        }, difference: function (e, i) {
            var n = [];
            return l.each(e, function (e, t) {
                -1 == i.indexOf(t) && n.push(t)
            }), n
        }, all: function (e) {
            return l.when.apply(l, _toConsumableArray(e).concat([42, 42]))
        }, objectCreate: Object.create || function (e) {
            if (1 < arguments.length) throw Error("Second argument not supported");
            if ("object" != typeof e) throw TypeError("Argument must be an object");
            i.prototype = e;
            e = new i;
            return i.prototype = null, e
        }, _SubmitSelector: 'input[type="submit"], button:submit'
    }, a = {
        namespace: "data-parsley-",
        inputs: "input, textarea, select",
        excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
        priorityEnabled: !0,
        multiple: null,
        group: null,
        uiEnabled: !0,
        validationThreshold: 3,
        focus: "first",
        trigger: !1,
        triggerAfterFailure: "input",
        errorClass: "parsley-error",
        successClass: "parsley-success",
        classHandler: function (e) {
        },
        errorsContainer: function (e) {
        },
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        errorTemplate: "<li></li>"
    };

    function i() {
    }

    s.prototype = {
        asyncSupport: !0, _pipeAccordingToValidationResult: function () {
            function e() {
                var e = l.Deferred();
                return !0 !== t.validationResult && e.reject(), e.resolve().promise()
            }

            var t = this;
            return [e, e]
        }, actualizeOptions: function () {
            return o.attr(this.element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
        }, _resetOptions: function (e) {
            for (var t in this.domOptions = o.objectCreate(this.parent.options), this.options = o.objectCreate(this.domOptions), e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
            this.actualizeOptions()
        }, _listeners: null, on: function (e, t) {
            return this._listeners = this._listeners || {}, (this._listeners[e] = this._listeners[e] || []).push(t), this
        }, subscribe: function (e, t) {
            l.listenTo(this, e.toLowerCase(), t)
        }, off: function (e, t) {
            var i = this._listeners && this._listeners[e];
            if (i) if (t) for (var n = i.length; n--;) i[n] === t && i.splice(n, 1); else delete this._listeners[e];
            return this
        }, unsubscribe: function (e, t) {
            l.unsubscribeTo(this, e.toLowerCase())
        }, trigger: function (e, t, i) {
            t = t || this;
            var n, r = this._listeners && this._listeners[e];
            if (r) for (var s = r.length; s--;) if (!1 === (n = r[s].call(t, t, i))) return n;
            return !this.parent || this.parent.trigger(e, t, i)
        }, asyncIsValid: function (e, t) {
            return o.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({
                group: e,
                force: t
            })
        }, _findRelated: function () {
            return this.options.multiple ? l(this.parent.element.querySelectorAll("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')) : this.$element
        }
    };

    function u(e) {
        l.extend(!0, this, e)
    }

    u.prototype = {
        validate: function (e, t) {
            if (this.fn) return 3 < arguments.length && (t = [].slice.call(arguments, 1, -1)), this.fn(e, t);
            if (Array.isArray(e)) {
                if (!this.validateMultiple) throw"Validator `" + this.name + "` does not handle multiple values";
                return this.validateMultiple.apply(this, arguments)
            }
            t = arguments[arguments.length - 1];
            if (this.validateDate && t._isDateInput()) return arguments[0] = o.parse.date(arguments[0]), null !== arguments[0] && this.validateDate.apply(this, arguments);
            if (this.validateNumber) return !isNaN(e) && (arguments[0] = parseFloat(arguments[0]), this.validateNumber.apply(this, arguments));
            if (this.validateString) return this.validateString.apply(this, arguments);
            throw"Validator `" + this.name + "` only handles multiple values"
        }, parseRequirements: function (e, t) {
            if ("string" != typeof e) return Array.isArray(e) ? e : [e];
            var i = this.requirementType;
            if (Array.isArray(i)) {
                for (var n = function (e, t) {
                    var i = e.match(/^\s*\[(.*)\]\s*$/);
                    if (!i) throw'Requirement is not an array: "' + e + '"';
                    i = i[1].split(",").map(o.trimString);
                    if (i.length !== t) throw"Requirement has " + i.length + " values when " + t + " are needed";
                    return i
                }(e, i.length), r = 0; r < n.length; r++) n[r] = o.parseRequirement(i[r], n[r]);
                return n
            }
            return l.isPlainObject(i) ? function (e, t, i) {
                var n, r, s = null, a = {};
                for (n in e) n ? ("string" == typeof (r = i(n)) && (r = o.parseRequirement(e[n], r)), a[n] = r) : s = o.parseRequirement(e[n], t);
                return [s, a]
            }(i, e, t) : [o.parseRequirement(i, e)]
        }, requirementType: "string", priority: 2
    };

    function d(e, t) {
        this.__class__ = "ValidatorRegistry", this.locale = "en", this.init(e || {}, t || {})
    }

    var c = {
        email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,
        number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
        integer: /^-?\d+$/,
        digits: /^\d+$/,
        alphanum: /^\w+$/i,
        date: {
            test: function (e) {
                return null !== o.parse.date(e)
            }
        },
        url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$")
    };
    c.range = c.number;

    function h(e) {
        return (e = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (e[1] ? e[1].length : 0) - (e[2] ? +e[2] : 0)) : 0
    }

    function p(r, s) {
        return function (e) {
            for (var t = arguments.length, i = Array(1 < t ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
            return i.pop(), s.apply(void 0, [e].concat(_toConsumableArray(m(r, i))))
        }
    }

    function f(e) {
        return {
            validateDate: p("date", e),
            validateNumber: p("number", e),
            requirementType: e.length <= 2 ? "string" : ["string", "string"],
            priority: 30
        }
    }

    var m = function (e, t) {
        return t.map(o.parse[e])
    };
    d.prototype = {
        init: function (e, t) {
            for (var i in this.catalog = t, this.validators = _extends({}, this.validators), e) this.addValidator(i, e[i].fn, e[i].priority);
            window.Parsley.trigger("parsley:validator:init")
        }, setLocale: function (e) {
            if (void 0 === this.catalog[e]) throw new Error(e + " is not available in the catalog");
            return this.locale = e, this
        }, addCatalog: function (e, t, i) {
            return "object" == typeof t && (this.catalog[e] = t), !0 === i ? this.setLocale(e) : this
        }, addMessage: function (e, t, i) {
            return void 0 === this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t] = i, this
        }, addMessages: function (e, t) {
            for (var i in t) this.addMessage(e, i, t[i]);
            return this
        }, addValidator: function (e, t, i) {
            if (this.validators[e]) o.warn('Validator "' + e + '" is already defined.'); else if (a.hasOwnProperty(e)) return void o.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator.apply(this, arguments)
        }, hasValidator: function (e) {
            return !!this.validators[e]
        }, updateValidator: function (e, t, i) {
            return this.validators[e] ? this._setValidator.apply(this, arguments) : (o.warn('Validator "' + e + '" is not already defined.'), this.addValidator.apply(this, arguments))
        }, removeValidator: function (e) {
            return this.validators[e] || o.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this
        }, _setValidator: function (e, t, i) {
            for (var n in (t = "object" != typeof t ? {
                fn: t,
                priority: i
            } : t).validate || (t = new u(t)), (this.validators[e] = t).messages || {}) this.addMessage(n, e, t.messages[n]);
            return this
        }, getErrorMessage: function (e) {
            return ("type" === e.name ? (this.catalog[this.locale][e.name] || {})[e.requirements] : this.formatMessage(this.catalog[this.locale][e.name], e.requirements)) || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
        }, formatMessage: function (e, t) {
            if ("object" != typeof t) return "string" == typeof e ? e.replace(/%s/i, t) : "";
            for (var i in t) e = this.formatMessage(e, t[i]);
            return e
        }, validators: {
            notblank: {
                validateString: function (e) {
                    return /\S/.test(e)
                }, priority: 2
            }, required: {
                validateMultiple: function (e) {
                    return 0 < e.length
                }, validateString: function (e) {
                    return /\S/.test(e)
                }, priority: 512
            }, type: {
                validateString: function (e, t) {
                    var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2], n = i.step,
                        r = void 0 === n ? "any" : n, n = i.base, i = void 0 === n ? 0 : n, n = c[t];
                    if (!n) throw new Error("validator type `" + t + "` is not supported");
                    if (!n.test(e)) return !1;
                    if ("number" === t && !/^any$/i.test(r || "")) {
                        var t = Number(e), s = Math.max(h(r), h(i));
                        if (h(t) > s) return !1;
                        e = function (e) {
                            return Math.round(e * Math.pow(10, s))
                        };
                        if ((e(t) - e(i)) % e(r) != 0) return !1
                    }
                    return !0
                }, requirementType: {"": "string", step: "string", base: "number"}, priority: 256
            }, pattern: {
                validateString: function (e, t) {
                    return t.test(e)
                }, requirementType: "regexp", priority: 64
            }, minlength: {
                validateString: function (e, t) {
                    return e.length >= t
                }, requirementType: "integer", priority: 30
            }, maxlength: {
                validateString: function (e, t) {
                    return e.length <= t
                }, requirementType: "integer", priority: 30
            }, length: {
                validateString: function (e, t, i) {
                    return e.length >= t && e.length <= i
                }, requirementType: ["integer", "integer"], priority: 30
            }, mincheck: {
                validateMultiple: function (e, t) {
                    return e.length >= t
                }, requirementType: "integer", priority: 30
            }, maxcheck: {
                validateMultiple: function (e, t) {
                    return e.length <= t
                }, requirementType: "integer", priority: 30
            }, check: {
                validateMultiple: function (e, t, i) {
                    return e.length >= t && e.length <= i
                }, requirementType: ["integer", "integer"], priority: 30
            }, min: f(function (e, t) {
                return t <= e
            }), max: f(function (e, t) {
                return e <= t
            }), range: f(function (e, t, i) {
                return t <= e && e <= i
            }), equalto: {
                validateString: function (e, t) {
                    var i = l(t);
                    return i.length ? e === i.val() : e === t
                }, priority: 256
            }
        }
    };

    function g(e, t, i) {
        for (var n = [], r = [], s = 0; s < e.length; s++) {
            for (var a = !1, o = 0; o < t.length; o++) if (e[s].assert.name === t[o].assert.name) {
                a = !0;
                break
            }
            (a ? r : n).push(e[s])
        }
        return {kept: r, added: n, removed: i ? [] : g(t, e, !0).added}
    }

    var v = {};
    v.Form = {
        _actualizeTriggers: function () {
            var t = this;
            this.$element.on("submit.Parsley", function (e) {
                t.onSubmitValidate(e)
            }), this.$element.on("click.Parsley", o._SubmitSelector, function (e) {
                t.onSubmitButton(e)
            }), !1 !== this.options.uiEnabled && this.element.setAttribute("novalidate", "")
        }, focus: function () {
            if (!(this._focusedField = null) === this.validationResult || "none" === this.options.focus) return null;
            for (var e = 0; e < this.fields.length; e++) {
                var t = this.fields[e];
                if (!0 !== t.validationResult && 0 < t.validationResult.length && void 0 === t.options.noFocus && (this._focusedField = t.$element, "first" === this.options.focus)) break
            }
            return null === this._focusedField ? null : this._focusedField.focus()
        }, _destroyUI: function () {
            this.$element.off(".Parsley")
        }
    }, v.Field = {
        _reflowUI: function () {
            var e;
            this._buildUI(), this._ui && (e = g(this.validationResult, this._ui.lastValidationResult), this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(e), this._actualizeTriggers(), !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers()))
        }, getErrorsMessages: function () {
            if (!0 === this.validationResult) return [];
            for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
            return e
        }, addError: function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], i = t.message, n = t.assert,
                t = t.updateClass, t = void 0 === t || t;
            this._buildUI(), this._addError(e, {message: i, assert: n}), t && this._errorClass()
        }, updateError: function (e) {
            var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], i = t.message, n = t.assert,
                t = t.updateClass, t = void 0 === t || t;
            this._buildUI(), this._updateError(e, {message: i, assert: n}), t && this._errorClass()
        }, removeError: function (e) {
            var t = (arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]).updateClass,
                t = void 0 === t || t;
            this._buildUI(), this._removeError(e), t && this._manageStatusClass()
        }, _manageStatusClass: function () {
            this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : 0 < this.validationResult.length ? this._errorClass() : this._resetClass()
        }, _manageErrorsMessages: function (e) {
            if (void 0 === this.options.errorsMessagesDisabled) {
                if (void 0 !== this.options.errorMessage) return e.added.length || e.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(l(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var t = 0; t < e.removed.length; t++) this._removeError(e.removed[t].assert.name);
                for (t = 0; t < e.added.length; t++) this._addError(e.added[t].assert.name, {
                    message: e.added[t].errorMessage,
                    assert: e.added[t].assert
                });
                for (t = 0; t < e.kept.length; t++) this._updateError(e.kept[t].assert.name, {
                    message: e.kept[t].errorMessage,
                    assert: e.kept[t].assert
                })
            }
        }, _addError: function (e, t) {
            var i = t.message, t = t.assert;
            this._insertErrorWrapper(), this._ui.$errorClassHandler.attr("aria-describedby", this._ui.errorsWrapperId), this._ui.$errorsWrapper.addClass("filled").append(l(this.options.errorTemplate).addClass("parsley-" + e).html(i || this._getErrorMessage(t)))
        }, _updateError: function (e, t) {
            var i = t.message, t = t.assert;
            this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(i || this._getErrorMessage(t))
        }, _removeError: function (e) {
            this._ui.$errorClassHandler.removeAttr("aria-describedby"), this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove()
        }, _getErrorMessage: function (e) {
            var t = e.name + "Message";
            return void 0 !== this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e)
        }, _buildUI: function () {
            var e;
            this._ui || !1 === this.options.uiEnabled || (e = {}, this.element.setAttribute(this.options.namespace + "id", this.__id__), e.$errorClassHandler = this._manageClassHandler(), e.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), e.$errorsWrapper = l(this.options.errorsWrapper).attr("id", e.errorsWrapperId), e.lastValidationResult = [], e.validationInformationVisible = !1, this._ui = e)
        }, _manageClassHandler: function () {
            if ("string" == typeof this.options.classHandler && l(this.options.classHandler).length) return l(this.options.classHandler);
            var e = this.options.classHandler;
            if ("function" == typeof (e = "string" == typeof this.options.classHandler && "function" == typeof window[this.options.classHandler] ? window[this.options.classHandler] : e)) {
                var t = e.call(this, this);
                if (void 0 !== t && t.length) return t
            } else {
                if ("object" == typeof e && e instanceof jQuery && e.length) return e;
                e && o.warn("The class handler `" + e + "` does not exist in DOM nor as a global JS function")
            }
            return this._inputHolder()
        }, _inputHolder: function () {
            return this.options.multiple && "SELECT" !== this.element.nodeName ? this.$element.parent() : this.$element
        }, _insertErrorWrapper: function () {
            var e = this.options.errorsContainer;
            if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
            if ("string" == typeof e) {
                if (l(e).length) return l(e).append(this._ui.$errorsWrapper);
                "function" == typeof window[e] ? e = window[e] : o.warn("The errors container `" + e + "` does not exist in DOM nor as a global JS function")
            }
            return "object" == typeof (e = "function" == typeof e ? e.call(this, this) : e) && e.length ? e.append(this._ui.$errorsWrapper) : this._inputHolder().after(this._ui.$errorsWrapper)
        }, _actualizeTriggers: function () {
            var e, t = this, i = this._findRelated();
            i.off(".Parsley"), this._failedOnce ? i.on(o.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function () {
                t._validateIfNeeded()
            }) : (e = o.namespaceEvents(this.options.trigger, "Parsley")) && i.on(e, function (e) {
                t._validateIfNeeded(e)
            })
        }, _validateIfNeeded: function (e) {
            var t = this;
            e && /key|input/.test(e.type) && (!this._ui || !this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || (this.options.debounce ? (window.clearTimeout(this._debounced), this._debounced = window.setTimeout(function () {
                return t.validate()
            }, this.options.debounce)) : this.validate())
        }, _resetUI: function () {
            this._failedOnce = !1, this._actualizeTriggers(), void 0 !== this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1)
        }, _destroyUI: function () {
            this._resetUI(), void 0 !== this._ui && this._ui.$errorsWrapper.remove(), delete this._ui
        }, _successClass: function () {
            this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
        }, _errorClass: function () {
            this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
        }, _resetClass: function () {
            this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
        }
    };

    function _(e, t, i) {
        this.__class__ = "Form", this.element = e, this.$element = l(e), this.domOptions = t, this.options = i, this.parent = window.Parsley, this.fields = [], this.validationResult = null
    }

    var y = {pending: null, resolved: !0, rejected: !1};
    _.prototype = {
        onSubmitValidate: function (e) {
            var t, i, n = this;
            !0 !== e.parsley && (t = this._submitSource || this.$element.find(o._SubmitSelector)[0], this._submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), t && null !== t.getAttribute("formnovalidate") || (window.Parsley._remoteCache = {}, "resolved" === (i = this.whenValidate({event: e})).state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(), e.preventDefault(), "pending" === i.state() && i.done(function () {
                n._submit(t)
            }))))
        }, onSubmitButton: function (e) {
            this._submitSource = e.currentTarget
        }, _submit: function (e) {
            var t;
            !1 !== this._trigger("submit") && (e && (t = 0 === (t = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1)).length ? l('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element) : t).attr({
                name: e.getAttribute("name"),
                value: e.getAttribute("value")
            }), this.$element.trigger(_extends(l.Event("submit"), {parsley: !0})))
        }, validate: function (e) {
            var t;
            return 1 <= arguments.length && !l.isPlainObject(e) && (o.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated."), e = {
                group: (t = _slice.call(arguments))[0],
                force: t[1],
                event: t[2]
            }), y[this.whenValidate(e).state()]
        }, whenValidate: function () {
            var e = this, t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], i = t.group,
                n = t.force, t = t.event;
            (this.submitEvent = t) && (this.submitEvent = _extends({}, t, {
                preventDefault: function () {
                    o.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), e.validationResult = !1
                }
            })), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
            t = this._withoutReactualizingFormOptions(function () {
                return l.map(e.fields, function (e) {
                    return e.whenValidate({force: n, group: i})
                })
            });
            return (t = o.all(t).done(function () {
                e._trigger("success")
            }).fail(function () {
                e.validationResult = !1, e.focus(), e._trigger("error")
            }).always(function () {
                e._trigger("validated")
            })).pipe.apply(t, _toConsumableArray(this._pipeAccordingToValidationResult()))
        }, isValid: function (e) {
            var t;
            return 1 <= arguments.length && !l.isPlainObject(e) && (o.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated."), e = {
                group: (t = _slice.call(arguments))[0],
                force: t[1]
            }), y[this.whenValid(e).state()]
        }, whenValid: function () {
            var e = this, t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], i = t.group,
                n = t.force;
            this._refreshFields();
            t = this._withoutReactualizingFormOptions(function () {
                return l.map(e.fields, function (e) {
                    return e.whenValid({group: i, force: n})
                })
            });
            return o.all(t)
        }, refresh: function () {
            return this._refreshFields(), this
        }, reset: function () {
            for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
            this._trigger("reset")
        }, destroy: function () {
            this._destroyUI();
            for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
            this.$element.removeData("Parsley"), this._trigger("destroy")
        }, _refreshFields: function () {
            return this.actualizeOptions()._bindFields()
        }, _bindFields: function () {
            var n = this, e = this.fields;
            return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function () {
                n.$element.find(n.options.inputs).not(n.options.excluded).each(function (e, t) {
                    var i = new window.Parsley.Factory(t, {}, n);
                    "Field" !== i.__class__ && "FieldMultiple" !== i.__class__ || !0 === i.options.excluded || (t = i.__class__ + "-" + i.__id__, void 0 === n.fieldsMappedById[t] && (n.fieldsMappedById[t] = i, n.fields.push(i)))
                }), l.each(o.difference(e, n.fields), function (e, t) {
                    t.reset()
                })
            }), this
        }, _withoutReactualizingFormOptions: function (e) {
            var t = this.actualizeOptions;
            this.actualizeOptions = function () {
                return this
            };
            e = e();
            return this.actualizeOptions = t, e
        }, _trigger: function (e) {
            return this.trigger("form:" + e)
        }
    };

    function w(e, t, i, n, r) {
        var s = window.Parsley._validatorRegistry.validators[t], s = new u(s);
        n = n || e.options[t + "Priority"] || s.priority, _extends(this, {
            validator: s,
            name: t,
            requirements: i,
            priority: n,
            isDomConstraint: r = !0 === r
        }), this._parseRequirements(e.options)
    }

    function b(e, t, i, n) {
        this.__class__ = "Field", this.element = e, this.$element = l(e), void 0 !== n && (this.parent = n), this.options = i, this.domOptions = t, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints()
    }

    var C = {
        pending: null, resolved: !0, rejected: !(w.prototype = {
            validate: function (e, t) {
                var i;
                return (i = this.validator).validate.apply(i, [e].concat(_toConsumableArray(this.requirementList), [t]))
            }, _parseRequirements: function (t) {
                var i = this;
                this.requirementList = this.validator.parseRequirements(this.requirements, function (e) {
                    return t[i.name + ((e = e)[0].toUpperCase() + e.slice(1))]
                })
            }
        })
    };
    b.prototype = {
        validate: function (e) {
            1 <= arguments.length && !l.isPlainObject(e) && (o.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), e = {options: e});
            e = this.whenValidate(e);
            if (!e) return !0;
            switch (e.state()) {
                case"pending":
                    return null;
                case"resolved":
                    return !0;
                case"rejected":
                    return this.validationResult
            }
        }, whenValidate: function () {
            var e = this, t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], i = t.force,
                t = t.group;
            if (this.refresh(), !t || this._isInGroup(t)) return this.value = this.getValue(), this._trigger("validate"), (i = this.whenValid({
                force: i,
                value: this.value,
                _refreshed: !0
            }).always(function () {
                e._reflowUI()
            }).done(function () {
                e._trigger("success")
            }).fail(function () {
                e._trigger("error")
            }).always(function () {
                e._trigger("validated")
            })).pipe.apply(i, _toConsumableArray(this._pipeAccordingToValidationResult()))
        }, hasConstraints: function () {
            return 0 !== this.constraints.length
        }, needsValidation: function (e) {
            return !(!(e = void 0 === e ? this.getValue() : e).length && !this._isRequired() && void 0 === this.options.validateIfEmpty)
        }, _isInGroup: function (e) {
            return Array.isArray(this.options.group) ? -1 !== l.inArray(e, this.options.group) : this.options.group === e
        }, isValid: function (e) {
            var t;
            1 <= arguments.length && !l.isPlainObject(e) && (o.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated."), e = {
                force: (t = _slice.call(arguments))[0],
                value: t[1]
            });
            e = this.whenValid(e);
            return !e || C[e.state()]
        }, whenValid: function () {
            var i = this, e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = e.force,
                n = void 0 !== t && t, r = e.value, t = e.group;
            if (e._refreshed || this.refresh(), !t || this._isInGroup(t)) {
                if (this.validationResult = !0, !this.hasConstraints()) return l.when();
                if (null != r || (r = this.getValue()), !this.needsValidation(r) && !0 !== n) return l.when();
                var n = this._getGroupedConstraints(), s = [];
                return l.each(n, function (e, t) {
                    t = o.all(l.map(t, function (e) {
                        return i._validateConstraint(r, e)
                    }));
                    if (s.push(t), "rejected" === t.state()) return !1
                }), o.all(s)
            }
        }, _validateConstraint: function (e, t) {
            var i = this, e = t.validate(e, this);
            return !1 === e && (e = l.Deferred().reject()), o.all([e]).fail(function (e) {
                i.validationResult instanceof Array || (i.validationResult = []), i.validationResult.push({
                    assert: t,
                    errorMessage: "string" == typeof e && e
                })
            })
        }, getValue: function () {
            var e = "function" == typeof this.options.value ? this.options.value(this) : void 0 !== this.options.value ? this.options.value : this.$element.val();
            return null == e ? "" : this._handleWhitespace(e)
        }, reset: function () {
            return this._resetUI(), this._trigger("reset")
        }, destroy: function () {
            this._destroyUI(), this.$element.removeData("Parsley"), this.$element.removeData("FieldMultiple"), this._trigger("destroy")
        }, refresh: function () {
            return this._refreshConstraints(), this
        }, _refreshConstraints: function () {
            return this.actualizeOptions()._bindConstraints()
        }, refreshConstraints: function () {
            return o.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh"), this.refresh()
        }, addConstraint: function (e, t, i, n) {
            return window.Parsley._validatorRegistry.validators[e] && (n = new w(this, e, t, i, n), "undefined" !== this.constraintsByName[n.name] && this.removeConstraint(n.name), this.constraints.push(n), this.constraintsByName[n.name] = n), this
        }, removeConstraint: function (e) {
            for (var t = 0; t < this.constraints.length; t++) if (e === this.constraints[t].name) {
                this.constraints.splice(t, 1);
                break
            }
            return delete this.constraintsByName[e], this
        }, updateConstraint: function (e, t, i) {
            return this.removeConstraint(e).addConstraint(e, t, i)
        }, _bindConstraints: function () {
            for (var e, t = [], i = {}, n = 0; n < this.constraints.length; n++) !1 === this.constraints[n].isDomConstraint && (t.push(this.constraints[n]), i[this.constraints[n].name] = this.constraints[n]);
            for (e in this.constraints = t, this.constraintsByName = i, this.options) this.addConstraint(e, this.options[e], void 0, !0);
            return this._bindHtml5Constraints()
        }, _bindHtml5Constraints: function () {
            null !== this.element.getAttribute("required") && this.addConstraint("required", !0, void 0, !0), null !== this.element.getAttribute("pattern") && this.addConstraint("pattern", this.element.getAttribute("pattern"), void 0, !0);
            var e = this.element.getAttribute("min"), t = this.element.getAttribute("max");
            null !== e && null !== t ? this.addConstraint("range", [e, t], void 0, !0) : null !== e ? this.addConstraint("min", e, void 0, !0) : null !== t && this.addConstraint("max", t, void 0, !0), null !== this.element.getAttribute("minlength") && null !== this.element.getAttribute("maxlength") ? this.addConstraint("length", [this.element.getAttribute("minlength"), this.element.getAttribute("maxlength")], void 0, !0) : null !== this.element.getAttribute("minlength") ? this.addConstraint("minlength", this.element.getAttribute("minlength"), void 0, !0) : null !== this.element.getAttribute("maxlength") && this.addConstraint("maxlength", this.element.getAttribute("maxlength"), void 0, !0);
            t = o.getType(this.element);
            return "number" === t ? this.addConstraint("type", ["number", {
                step: this.element.getAttribute("step") || "1",
                base: e || this.element.getAttribute("value")
            }], void 0, !0) : /^(email|url|range|date)$/i.test(t) ? this.addConstraint("type", t, void 0, !0) : this
        }, _isRequired: function () {
            return void 0 !== this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
        }, _trigger: function (e) {
            return this.trigger("field:" + e)
        }, _handleWhitespace: function (e) {
            return !0 === this.options.trimValue && o.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")), e = "trim" === this.options.whitespace || "squish" === this.options.whitespace || !0 === this.options.trimValue ? o.trimString(e) : e
        }, _isDateInput: function () {
            var e = this.constraintsByName.type;
            return e && "date" === e.requirements
        }, _getGroupedConstraints: function () {
            if (!1 === this.options.priorityEnabled) return [this.constraints];
            for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) {
                var n = this.constraints[i].priority;
                t[n] || e.push(t[n] = []), t[n].push(this.constraints[i])
            }
            return e.sort(function (e, t) {
                return t[0].priority - e[0].priority
            }), e
        }
    };

    function E() {
        this.__class__ = "FieldMultiple"
    }

    var F = b;
    E.prototype = {
        addElement: function (e) {
            return this.$elements.push(e), this
        }, _refreshConstraints: function () {
            if (this.constraints = [], "SELECT" === this.element.nodeName) return this.actualizeOptions()._bindConstraints(), this;
            for (var e = 0; e < this.$elements.length; e++) if (l("html").has(this.$elements[e]).length) for (var t = this.$elements[e].data("FieldMultiple")._refreshConstraints().constraints, i = 0; i < t.length; i++) this.addConstraint(t[i].name, t[i].requirements, t[i].priority, t[i].isDomConstraint); else this.$elements.splice(e, 1);
            return this
        }, getValue: function () {
            if ("function" == typeof this.options.value) return this.options.value(this);
            if (void 0 !== this.options.value) return this.options.value;
            if ("INPUT" === this.element.nodeName) {
                var e = o.getType(this.element);
                if ("radio" === e) return this._findRelated().filter(":checked").val() || "";
                if ("checkbox" === e) {
                    var t = [];
                    return this._findRelated().filter(":checked").each(function () {
                        t.push(l(this).val())
                    }), t
                }
            }
            return "SELECT" === this.element.nodeName && null === this.$element.val() ? [] : this.$element.val()
        }, _init: function () {
            return this.$elements = [this.$element], this
        }
    };

    function k(e, t, i) {
        if (this.element = e, this.$element = l(e), e = this.$element.data("Parsley")) return void 0 !== i && e.parent === window.Parsley && (e.parent = i, e._resetOptions(e.options)), "object" == typeof t && _extends(e.options, t), e;
        if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
        if (void 0 !== i && "Form" !== i.__class__) throw new Error("Parent instance must be a Form instance");
        return this.parent = i || window.Parsley, this.init(t)
    }

    k.prototype = {
        init: function (e) {
            return this.__class__ = "Parsley", this.__version__ = "2.8.1", this.__id__ = o.generateID(), this._resetOptions(e), "FORM" === this.element.nodeName || o.checkAttr(this.element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
        }, isMultiple: function () {
            var e = o.getType(this.element);
            return "radio" === e || "checkbox" === e || "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")
        }, handleMultiple: function () {
            var e, t, n = this;
            if (this.options.multiple = this.options.multiple || (e = this.element.getAttribute("name")) || this.element.getAttribute("id"), "SELECT" === this.element.nodeName && null !== this.element.getAttribute("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return o.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), e && l('input[name="' + e + '"]').each(function (e, t) {
                var i = o.getType(t);
                "radio" !== i && "checkbox" !== i || t.setAttribute(n.options.namespace + "multiple", n.options.multiple)
            });
            for (var i = this._findRelated(), r = 0; r < i.length; r++) if (void 0 !== (t = l(i.get(r)).data("Parsley"))) {
                this.$element.data("FieldMultiple") || t.addElement(this.$element);
                break
            }
            return this.bind("parsleyField", !0), t || this.bind("parsleyFieldMultiple")
        }, bind: function (e, t) {
            var i;
            switch (e) {
                case"parsleyForm":
                    i = l.extend(new _(this.element, this.domOptions, this.options), new s, window.ParsleyExtend)._bindFields();
                    break;
                case"parsleyField":
                    i = l.extend(new F(this.element, this.domOptions, this.options, this.parent), new s, window.ParsleyExtend);
                    break;
                case"parsleyFieldMultiple":
                    i = l.extend(new F(this.element, this.domOptions, this.options, this.parent), new E, new s, window.ParsleyExtend)._init();
                    break;
                default:
                    throw new Error(e + "is not a supported Parsley type")
            }
            return this.options.multiple && o.setAttr(this.element, this.options.namespace, "multiple", this.options.multiple), void 0 !== t ? this.$element.data("FieldMultiple", i) : (this.$element.data("Parsley", i), i._actualizeTriggers(), i._trigger("init")), i
        }
    };
    var T = l.fn.jquery.split(".");
    if (parseInt(T[0]) <= 1 && parseInt(T[1]) < 8) throw"The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
    T.forEach || o.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
    var x = _extends(new s, {
        element: document,
        $element: l(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: k,
        version: "2.8.1"
    });
    _extends(F.prototype, v.Field, s.prototype), _extends(_.prototype, v.Form, s.prototype), _extends(k.prototype, s.prototype), l.fn.parsley = l.fn.psly = function (e) {
        if (1 < this.length) {
            var t = [];
            return this.each(function () {
                t.push(l(this).parsley(e))
            }), t
        }
        if (0 != this.length) return new k(this[0], e)
    }, void 0 === window.ParsleyExtend && (window.ParsleyExtend = {}), x.options = _extends(o.objectCreate(a), window.ParsleyConfig), window.ParsleyConfig = x.options, (window.Parsley = window.psly = x).Utils = o, window.ParsleyUtils = {}, l.each(o, function (e, t) {
        "function" == typeof t && (window.ParsleyUtils[e] = function () {
            return o.warnOnce("Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead."), o[e].apply(o, arguments)
        })
    });
    var A = window.Parsley._validatorRegistry = new d(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyValidator = {}, l.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator".split(" "), function (e, t) {
        window.Parsley[t] = function () {
            return A[t].apply(A, arguments)
        }, window.ParsleyValidator[t] = function () {
            var e;
            return o.warnOnce("Accessing the method '" + t + "' through Validator is deprecated. Simply call 'window.Parsley." + t + "(...)'"), (e = window.Parsley)[t].apply(e, arguments)
        }
    }), window.Parsley.UI = v, window.ParsleyUI = {
        removeError: function (e, t, i) {
            i = !0 !== i;
            return o.warnOnce("Accessing UI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, {updateClass: i})
        }, getErrorsMessages: function (e) {
            return o.warnOnce("Accessing UI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages()
        }
    }, l.each("addError updateError".split(" "), function (e, s) {
        window.ParsleyUI[s] = function (e, t, i, n, r) {
            r = !0 !== r;
            return o.warnOnce("Accessing UI is deprecated. Call '" + s + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[s](t, {
                message: i,
                assert: n,
                updateClass: r
            })
        }
    }), !1 !== window.ParsleyConfig.autoBind && l(function () {
        l("[data-parsley-validate]").length && l("[data-parsley-validate]").parsley()
    });

    function I() {
        o.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
    }

    var P = l({}), M = "parsley:";
    return l.listen = function (e, t) {
        var i;
        if (I(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (i = arguments[1], t = arguments[2]), "function" != typeof t) throw new Error("Wrong parameters");
        window.Parsley.on(r(e), n(t, i))
    }, l.listenTo = function (e, t, i) {
        if (I(), !(e instanceof F || e instanceof _)) throw new Error("Must give Parsley instance");
        if ("string" != typeof t || "function" != typeof i) throw new Error("Wrong parameters");
        e.on(r(t), n(i))
    }, l.unsubscribe = function (e, t) {
        if (I(), "string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
        window.Parsley.off(r(e), t.parsleyAdaptedCallback)
    }, l.unsubscribeTo = function (e, t) {
        if (I(), !(e instanceof F || e instanceof _)) throw new Error("Must give Parsley instance");
        e.off(r(t))
    }, l.unsubscribeAll = function (t) {
        I(), window.Parsley.off(r(t)), l("form,input,textarea,select").each(function () {
            var e = l(this).data("Parsley");
            e && e.off(r(t))
        })
    }, l.emit = function (e, t) {
        I();
        var i = t instanceof F || t instanceof _, n = Array.prototype.slice.call(arguments, i ? 2 : 1);
        n.unshift(r(e)), (t = !i ? window.Parsley : t).trigger.apply(t, _toConsumableArray(n))
    }, l.extend(!0, x, {
        asyncValidators: {
            default: {
                fn: function (e) {
                    return 200 <= e.status && e.status < 300
                }, url: !1
            }, reverse: {
                fn: function (e) {
                    return e.status < 200 || 300 <= e.status
                }, url: !1
            }
        }, addAsyncValidator: function (e, t, i, n) {
            return x.asyncValidators[e] = {fn: t, url: i || !1, options: n || {}}, this
        }
    }), x.addValidator("remote", {
        requirementType: {
            "": "string",
            validator: "string",
            reverse: "boolean",
            options: "object"
        }, validateString: function (e, t, i, n) {
            var r = {}, s = i.validator || (!0 === i.reverse ? "reverse" : "default");
            if (void 0 === x.asyncValidators[s]) throw new Error("Calling an undefined async validator: `" + s + "`");
            -1 < (t = x.asyncValidators[s].url || t).indexOf("{value}") ? t = t.replace("{value}", encodeURIComponent(e)) : r[n.element.getAttribute("name") || n.element.getAttribute("id")] = e;
            var e = l.extend(!0, i.options || {}, x.asyncValidators[s].options),
                r = l.extend(!0, {}, {url: t, data: r, type: "GET"}, e);
            n.trigger("field:ajaxoptions", n, r), e = l.param(r), void 0 === x._remoteCache && (x._remoteCache = {});

            function a() {
                var e = (e = x.asyncValidators[s].fn.call(n, o, t, i)) || l.Deferred().reject();
                return l.when(e)
            }

            var o = x._remoteCache[e] = x._remoteCache[e] || l.ajax(r);
            return o.then(a, a)
        }, priority: -1
    }), x.on("form:submit", function () {
        x._remoteCache = {}
    }), s.prototype.addAsyncValidator = function () {
        return o.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), x.addAsyncValidator.apply(x, arguments)
    }, x.addMessages("en", {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    }), x.setLocale("en"), (new function () {
        var n = this, r = window || global;
        _extends(this, {
            isNativeEvent: function (e) {
                return e.originalEvent && !1 !== e.originalEvent.isTrusted
            }, fakeInputEvent: function (e) {
                n.isNativeEvent(e) && l(e.target).trigger("input")
            }, misbehaves: function (e) {
                n.isNativeEvent(e) && (n.behavesOk(e), l(document).on("change.inputevent", e.data.selector, n.fakeInputEvent), n.fakeInputEvent(e))
            }, behavesOk: function (e) {
                n.isNativeEvent(e) && l(document).off("input.inputevent", e.data.selector, n.behavesOk).off("change.inputevent", e.data.selector, n.misbehaves)
            }, install: function () {
                if (!r.inputEventPatched) {
                    r.inputEventPatched = "0.0.3";
                    for (var e = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], t = 0; t < e.length; t++) {
                        var i = e[t];
                        l(document).on("input.inputevent", i, {selector: i}, n.behavesOk).on("change.inputevent", i, {selector: i}, n.misbehaves)
                    }
                }
            }, uninstall: function () {
                delete r.inputEventPatched, l(document).off(".inputevent")
            }
        })
    }).install(), x
}), function () {
    function i(e) {
        return e.replace(/(^\s*)|(\s*$)/gi, "").replace(/\s+/gi, " ").split(" ").length
    }

    window.Parsley.addValidator("minwords", function (e, t) {
        return i(e) >= t
    }, 32).addMessage("en", "minwords", "This value needs more words"), window.Parsley.addValidator("maxwords", function (e, t) {
        return i(e) <= t
    }, 32).addMessage("en", "maxwords", "This value needs fewer words"), window.Parsley.addValidator("words", function (e, t) {
        e = i(e);
        return e >= t[0] && e <= t[1]
    }, 32).addMessage("en", "words", "This value has the incorrect number of words")
}(), jQuery(document).ready(function (d) {
    var n, e, t, r, s, a;
    d("body").hasClass("scrollmagic") && (n = new ScrollMagic.Controller, d(".hr__quadrant.hr__quadrant--animate").length && (e = d(".hr__quadrant--animate").outerHeight(!0), t = d("#hr__scroll-content").height(), r = d("#leaders-scroll-content").height(), s = d("#attractors-scroll-content").height(), a = d("#achievers-scroll-content").height(), d("#learners-scroll-content").height(), new ScrollMagic.Scene({
        triggerElement: ".hr__quadrant",
        triggerHook: "onLeave",
        duration: t - e,
        offset: -200
    }).setPin(".hr__quadrant--animate").addTo(n), new ScrollMagic.Scene({
        triggerElement: "#leaders-scroll-content",
        duration: r
    }).setClassToggle('[data-title="leaders"]', "active").addTo(n), new ScrollMagic.Scene({
        triggerElement: "#attractors-scroll-content",
        duration: s
    }).setClassToggle('[data-title="attractors"]', "active").addTo(n), new ScrollMagic.Scene({
        triggerElement: "#achievers-scroll-content",
        duration: a
    }).setClassToggle('[data-title="achievers"]', "active").addTo(n), new ScrollMagic.Scene({triggerElement: "#learners-scroll-content"}).setClassToggle('[data-title="learners"]', "active").addTo(n)), d(".side-pagination").length && d(".hr__pagination-section").each(function (e, t) {
        var i = d(this).attr("id"), e = e + 1;
        new ScrollMagic.Scene({
            triggerElement: "#" + i,
            triggerHook: "onLeave",
            offset: -200
        }).setClassToggle('.side-pagination > div[class^="menu"]', "reached-" + e + "-item").addTo(n)
    })), d(".fl-number-text .fl-number-int").length && d(".fl-number-text .fl-number-int").html("<div class='hr__cursor-rectangle'></div>"), d("#primary-menu .menu-item-has-children > a .menu-item__bullets").on("click", function (e) {
        var t = d(this).parent("a"), i = t.parents(".sub-menu").find(".sub-menu"), n = t.next(".sub-menu");
        console.log(n), e.preventDefault(), t.next().is(":visible") ? (t.removeClass("toggled"), t.find(".menu-item__bullets").removeClass("toggled"), t.next().slideUp(230)) : (i.slideUp(230).prev().removeClass("toggled"), i.prev().find(".menu-item__bullets").removeClass("toggled"), t.toggleClass("toggled"), n.slideToggle(230))
    }), d("#primary-menu > .menu-item-has-children").mouseleave(function () {
        d(this).find(".menu-item:not(.hr__dsp_menu-item) .toggled").removeClass("toggled"), d(this).find(".menu-item:not(.hr__dsp_menu-item) .sub-menu").hide()
    }), d(".hr__partners-section:not(.hr__partners-section--full-width-row) .fl-col-group").length && (swiper = new Swiper(".hr__partners-section:not(.hr__partners-section--full-width-row) > .fl-row-content-wrap > .fl-node-content", {
        wrapperClass: "fl-col-group",
        slideClass: "fl-col",
        slidesPerView: "auto",
        freeMode: !0,
        resistanceRatio: !1,
        breakpoints: {
            1170: {autoplay: !0, delay: 3e3, loop: !0, speed: 230},
            992: {autoplay: !0, delay: 3e3, loop: !0, speed: 230},
            768: {autoplay: !0, delay: 3e3, loop: !0, speed: 230}
        }
    })), d(".hr__partners-section--full-width-row .fl-col-group").length && (swiper = new Swiper(".hr__partners-section--full-width-row > .fl-row-content-wrap > .fl-node-content", {
        wrapperClass: "fl-col-group",
        slideClass: "fl-col",
        slidesPerView: "auto",
        resistanceRatio: !1,
        loop: !0,
        spaceBetween: 100,
        speed: 5e3,
        autoplay: {delay: 0, disableOnInteraction: !1},
        breakpoints: {1600: {spaceBetween: 0}, 1920: {spaceBetween: 40}}
    })), d(".hr__projects__technologies .fl-col-group").length && (swiper = new Swiper(".hr__projects__technologies > .fl-row-content-wrap > .fl-node-content", {
        wrapperClass: "fl-col-group",
        slideClass: "fl-col",
        slidesPerView: "auto",
        delay: 3e3,
        speed: 230,
        freeMode: !0,
        resistanceRatio: !1,
        allowTouchMove: !1,
        breakpoints: {768: {allowTouchMove: !0}}
    })), d(".hr__gallery-slider .fl-col-group").length && (swiper = new Swiper(".hr__gallery-slider > .fl-row-content-wrap > .fl-node-content", {
        wrapperClass: "fl-col-group",
        slideClass: "fl-col",
        slidesPerView: "auto",
        freeMode: !0,
        resistanceRatio: !1,
        loop: !0,
        breakpoints: {
            1170: {autoplay: !0, delay: 3e3, loop: !0, speed: 230},
            992: {autoplay: !0, delay: 3e3, loop: !0, speed: 230},
            768: {autoplay: !0, delay: 3e3, loop: !0, speed: 230}
        }
    })), d(".hr__about-us__media-slider .fl-col-group").length && (swiper = new Swiper(".hr__about-us__media-slider > .fl-row-content-wrap > .fl-node-content", {
        wrapperClass: "fl-col-group",
        slideClass: "fl-col",
        slidesPerView: "auto",
        freeMode: !0,
        resistanceRatio: !1,
        breakpoints: {768: {autoplay: !0, delay: 3e3, loop: !0, speed: 230}}
    })), d("select").length && (document.querySelector("select").classList.add("has-placeholder"), document.querySelector("select").addEventListener("change", function (e) {
        e.currentTarget.classList.remove("has-placeholder")
    })), d("body").hasClass("home") && setTimeout(function () {
        for (lines = ["===============================================================================", ",--.  ,--.              ,--.                 ,------.                 ,--.     ", "|  '--'  | ,--,--. ,---.|  |,-. ,---. ,--.--.|  .--. ' ,--,--.,--,--, |  |,-.  ", "|  .--.  |' ,-.  || .--'|     /| .-. :|  .--'|  '--'.'' ,-.  ||      \\|     /  ", "|  |  |  |\\ '-'  |\\ `--.|  \\  \\\\   --.|  |   |  |\\  \\ \\ '-'  ||  ||  ||  \\  \\  ", "`--'  `--' `--`--' `---'`--'`--'`----'`--'   `--' '--' `--`--'`--''--'`--'`--' ", "===============================================================================", "  You opened the console! Know some code, do you? Want to work for one of the  ", "  best startups around? https://www.hackerrank.com/careers                     ", "==============================================================================="], i = 0; i < lines.length; i++) console.log(lines[i])
    }, 5e3), window.trackJs && trackJs.track("Page Loaded"), d(".fl-post-toggle-content").on("click", function () {
        d(this).parent().toggleClass("toggled")
    });
    var o, l, u, c, h, p, f, m, g, v, _, y, w, b, C;

    function E(e) {
        e.each(function () {
            var e = d(this);
            d(window).scrollTop() + .5 * d(window).height() > e.offset().top && e.addClass("is-visible")
        }), b = !1
    }

    function F(e, t, i, n, r, s, a, o) {
        t = e.pageX + t - i;
        t < n ? t = n : r < t && (t = r);
        a = 100 * (t + i / 2 - s) / a + "%";
        d(".draggable").css("left", a).on("mouseup vmouseup", function () {
            d(this).removeClass("draggable"), o.removeClass("resizable")
        }), d(".resizable").css("width", a), w = !1
    }

    d("body").hasClass("fl-builder-edit") && d(".fl-link-field-search-input").autoSuggest("defaults", {
        afterRequest: function (e) {
            return e.forEach(function (e, t, i) {
                "string" == typeof e.value && (e.value = e.value.replace(/^.*\/\/[^\/]+/, ""))
            }), e
        }
    }), d(".hr__hover-tab").length && (d.each(d(".hr__hover-tab"), function (e, t) {
        var i = d(this).find(".hr__hover-tab__nav__item.active");
        i.length && (i = i.attr("id"), d(this).find("." + i).addClass("active"))
    }), d(".hr__hover-tab__nav__item").hover(function () {
        var e = d(this).attr("id");
        d(this).parents(".hr__hover-tab").find(".hr__hover-tab__pane").removeClass("active"), d(this).siblings().removeClass("active"), d(this).addClass("active"), d(this).parents(".hr__hover-tab").find("." + e).addClass("active")
    }, function () {
    })), d(".hr__codescreen__tests-slider").length && (y = document.querySelector(".fl-content-slider-wrapper"), o = y.querySelector('.fl-slide[aria-hidden="false"]'), g = !(m = !1), y.addEventListener("touchstart", function (e) {
        (new Date).getTime(), l = e.changedTouches[0].clientX, u = e.changedTouches[0].clientY, p = l, f = u, m = !0, console.log(o)
    }, !(v = "None")), y.addEventListener("touchmove", function (e) {
        p = e.changedTouches[0].clientX, f = e.changedTouches[0].clientY, c = p - l, h = f - u, console.log(c, h), function (i, n, r, s) {
            requestAnimationFrame(function () {
                var e, t = s;
                rotateElement = g ? 15 < (e = i) / 10 ? 15 : e / 10 < -15 ? -15 : e / 10 : 0, "Top" === v ? (elTrans = elementsMargin * (items - 1), t && (t.style.webkitTransform = "translateX(" + i + "px) translateY(" + (n + elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)", t.style.transform = "translateX(" + i + "px) translateY(" + (n + elTrans) + "px) translateZ(0) rotate(" + rotateElement + "deg)", t.style.opacity = r)) : "Bottom" !== v && "None" !== v || t && (t.style.webkitTransform = "translateX(" + i + "px) translateY(" + n + "px) translateZ(0) rotate(" + rotateElement + "deg)", t.style.transform = "translateX(" + i + "px) translateY(" + n + "px) translateZ(0) rotate(" + rotateElement + "deg)", t.style.opacity = r)
            })
        }(c, h, 1, o)
    }, !1), y.addEventListener("touchend", function (e) {
        m && (c = p - l, h = f - u, (new Date).getTime(), m = !1)
    }, !1)), d(".hr__mwc-page__story-row__images-column").length && (d(window).width() < 768 ? d(".hr__mwc-page__story-row__images-column").each(function (e, t) {
        d(t).trigger("sticky_kit:detach")
    }) : (_ = new ScrollMagic.Controller, d(".hr__mwc-page__story-row__images-column").each(function (e, t) {
        var i = this.parentNode.parentNode.parentNode.parentNode;
        d(t).stick_in_parent({offset_top: 260});
        new ScrollMagic.Scene({
            triggerElement: i,
            triggerHook: "0.5",
            offset: d(i).outerHeight(!0) / 2
        }).setClassToggle(i, "hr__mwc-page__story-row--change-image").addTo(_)
    })), d(window).resize(function () {
        d(window).width() < 768 ? d(".hr__mwc-page__story-row__images-column").each(function (e, t) {
            d(t).trigger("sticky_kit:detach")
        }) : d(".hr__mwc-page__story-row__images-column").each(function (e, t) {
            d(t).stick_in_parent({offset_top: 260})
        })
    })), d(".hr__clw__main-content__image").length && (768 < d(window).width() && d(".hr__clw__main-content__image").stick_in_parent({offset_top: 72}), d(window).resize(function () {
        d(window).width() < 768 ? d(".hr__clw__main-content__image").trigger("sticky_kit:detach") : d(".hr__clw__main-content__image").stick_in_parent({offset_top: 72})
    })), d(".hr__mwc-page__story-row").length && ((y = d(".hr__mwc-page__story-row").find(".hr__read-more-excerpt")).parents(".fl-rich-text").addClass("fl-rich-text--excerpt-shown"), y.click(function () {
        d(this).parents(".fl-rich-text").removeClass("fl-rich-text--excerpt-shown")
    })), d(".hr__mwc-page__story-row__images .fl-mosaicflow-content").off("filled"), ".hr__comparison-column".length && (b = w = !1, E(C = d(".hr__comparison-column")), d(window).on("scroll", function () {
        b || (b = !0, window.requestAnimationFrame ? requestAnimationFrame(function () {
            E(C)
        }) : setTimeout(function () {
            E(C)
        }, 100))
    }), C.each(function () {
        var o, l, u, e, t, i = d(this);
        console.log(i), i.imagesLoaded({}, function () {
            i.addClass("images-loaded")
        }), o = i.find(".hr__comparison__handle"), l = i.find(".fl-module-photo:nth-child(2)"), u = i.find(" > .fl-col-content"), e = i.find('.cd-image-label[data-type="original"]'), t = i.find('.cd-image-label[data-type="modified"]'), o.on("mousedown vmousedown", function (e) {
            o.addClass("draggable"), l.addClass("resizable"), u.addClass("used");
            var t = o.outerWidth(), i = o.offset().left + t - e.pageX, n = u.offset().left, r = u.outerWidth(),
                s = n - 22, a = n + r - t + 22;
            o.parents().on("mousemove vmousemove", function (e) {
                w || (w = !0, window.requestAnimationFrame ? requestAnimationFrame(function () {
                    F(e, i, t, s, a, n, r, l)
                }) : setTimeout(function () {
                    F(e, i, t, s, a, n, r, l)
                }, 100))
            }).on("mouseup vmouseup", function (e) {
                o.removeClass("draggable"), l.removeClass("resizable")
            }), e.preventDefault()
        }).on("mouseup vmouseup", function (e) {
            o.removeClass("draggable"), l.removeClass("resizable")
        })
    })), d(".hr__clw__main-content").length && d(".hr__clw__main-content .hr__clw__main-content__text").each(function (e, t) {
        var i = d(this).attr("id"), e = e + 1;
        void 0 !== i && new ScrollMagic.Scene({
            triggerElement: "#" + i,
            triggerHook: .5
        }).setClassToggle('.hr__clw__main-content, .side-pagination > div[class^="menu"]', "reached-" + e + "-item").addTo(n)
    }), d(".lpopup-bar").each(function () {
        var e = 1, t = d(this);
        setTimeout(function () {
            t.on("mouseover", function () {
                e && (e = 0, d("body").addClass("lpopup"))
            })
        }, 5e3), d(".lpopup-close").on("click", function (e) {
            e.preventDefault(), d("body").removeClass("lpopup")
        })
    }), d.fn.freemium = function () {
        return this.each(function () {
            var i = d(this), t = 0, n = d(".freemium-workspace-slides-list-item", i).length;

            function r(e) {
                n <= e ? e = 0 : e < 0 && (e = n - 1), t = e, d(d(".freemium-workspace-slides-nav a", i)[e]).closest("li").addClass("active").siblings().removeClass("active"), d(d(".freemium-workspace-slides-list-item", i)[e]).addClass("active").siblings().removeClass("active")
            }

            !function () {
                new Headroom(d(".freemium-header", i)[0]).init(), d(".freemium-workspace-slides-nav a", i).click(function (e) {
                    e.preventDefault(), r(d(this).closest("li").index())
                }), d(".freemium-workspace-slides-box-arrows a", i).click(function (e) {
                    e.preventDefault(), r(d(this).index() ? t + 1 : t - 1)
                }), d(".freemium-plans-nav a", i).click(function (e) {
                    e.preventDefault();
                    var t = d(this), e = t.data().cl;
                    t.closest("li").addClass("active").siblings().removeClass("active"), d(".freemium-plans-list", i).removeClass("annual monthly").addClass(e)
                });
                var e = new ScrollMagic.Controller;
                new ScrollMagic.Scene({
                    triggerElement: d(".freemium-intro-screenshot-image", i)[0],
                    triggerHook: .5
                }).setClassToggle(d(".freemium-intro-screenshot-people", i)[0], "active").addTo(e)
            }()
        }), this
    }, d(".freemium").freemium(), d.fn.skills_chart = function () {
        return this.each(function () {
            var t = d(this), i = d(".skills_chart-skills", t), e = d(d(".skills_chart-roles-note")[0]).outerHeight(),
                n = 0, r = d(".skills_chart-slide-skills", t);

            function s(e, t) {
                i.addClass(t), d("." + e).addClass(t)
            }

            function a(e) {
                i.removeClass(e), d("li", i).removeClass(e)
            }

            d(".skills_chart-roles a", t).click(function (e) {
                e.preventDefault();
                e = d(this);
                d(".skills_chart-roles li", t).removeClass("active"), e.parents("li").addClass("active"), a("active"), s(e.attr("href").replace("#", ""), "active")
            }), d("li ul", t).each(function (e) {
                n = n < d(this).outerHeight() ? d(this).outerHeight() : n
            }), d(".skills_chart-roles", t).css("height", n + e), d(".skills_chart-roles-family a", t).hover(function () {
                d(this).closest("li").siblings().find(".skills_chart-roles-family_content").hide(), s(d(this).attr("href").replace("#", ""), "hovered")
            }, function () {
                d(this).closest("li").siblings().find(".skills_chart-roles-family_content").show(), a("hovered")
            }), d(d(".skills_chart-roles a", t)[0]).click(), r.each(function () {
                var e = d(this), t = e.attr("id");
                d("li", e).not("." + t).remove()
            }), d(".skills_chart-slides", t).slick({prevArrow: !1, nextArrow: !1, dots: !0})
        }), this
    }, d(".skills_chart").skills_chart(), d('a[target="_blank"]').each(function () {
        var e = d(this), t = e.attr("href");
        /hackerrank.com/i.test(t) || e.attr("rel", "noopener")
    })
});