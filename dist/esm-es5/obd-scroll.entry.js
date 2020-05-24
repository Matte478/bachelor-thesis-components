import { r as registerInstance, h } from './core-1dbfc232.js';
var Scroll = /** @class */ (function () {
    function Scroll(hostRef) {
        registerInstance(this, hostRef);
        this.target = '';
    }
    Scroll.prototype.handleClick = function () {
        var target = document.getElementById(this.target);
        if (target) {
            this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop + 68, 500, true);
        }
    };
    Scroll.prototype.animate = function (elem, style, unit, from, to, time, prop) {
        if (!elem)
            return;
        var start = new Date().getTime();
        var timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from)) + unit;
            }
            else {
                elem.style[style] = (from + step * (to - from)) + unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
        if (prop) {
            elem[style] = from + unit;
        }
        else {
            elem.style[style] = from + unit;
        }
    };
    Scroll.prototype.render = function () {
        return (h("obd-button", null, h("slot", null)));
    };
    Object.defineProperty(Scroll, "style", {
        get: function () { return "\@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700,800,900&display=swap&subset=latin-ext\");:host{display:inline-block}"; },
        enumerable: true,
        configurable: true
    });
    return Scroll;
}());
export { Scroll as obd_scroll };
