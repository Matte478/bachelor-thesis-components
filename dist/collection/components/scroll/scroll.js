import { h } from "@stencil/core";
export class Scroll {
    constructor() {
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
        return (h("obd-button", null,
            h("slot", null)));
    }
    static get is() { return "obd-scroll"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["scroll.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["scroll.css"]
    }; }
    static get properties() { return {
        "target": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "target",
            "reflect": false,
            "defaultValue": "''"
        }
    }; }
    static get listeners() { return [{
            "name": "click",
            "method": "handleClick",
            "target": undefined,
            "capture": true,
            "passive": false
        }]; }
}
