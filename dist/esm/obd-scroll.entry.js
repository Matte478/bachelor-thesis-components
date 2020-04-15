import { r as registerInstance, h } from './core-b64fa00c.js';

const Scroll = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        return (h("obd-button", null, h("slot", null)));
    }
    static get style() { return "\@import url(\"https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,600,700,800,900&display=swap&subset=latin-ext\");*{font-family:Fira Sans,Helvetica,Arial,sans-serif}:host{display:inline-block}"; }
};

export { Scroll as obd_scroll };
