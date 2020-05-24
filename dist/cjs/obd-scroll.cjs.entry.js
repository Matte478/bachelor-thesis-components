'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5439e6c7.js');

const Scroll = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        this.target = '';
    }
    handleClick() {
        let target = document.getElementById(this.target);
        if (target) {
            this.animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop + 68, 500, true);
        }
    }
    animate(elem, style, unit, from, to, time, prop) {
        if (!elem)
            return;
        let start = new Date().getTime();
        let timer = setInterval(function () {
            let step = Math.min(1, (new Date().getTime() - start) / time);
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
    }
    render() {
        return (core.h("obd-button", null, core.h("slot", null)));
    }
    static get style() { return "\@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700,800,900&display=swap&subset=latin-ext\");:host{display:inline-block}"; }
};

exports.obd_scroll = Scroll;
