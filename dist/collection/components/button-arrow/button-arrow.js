import { h } from "@stencil/core";
export class ButtonArrow {
    constructor() {
        this.right = false;
    }
    render() {
        return (h("button", { class: 'arrow ' + (this.right ? 'right' : ''), onClick: () => this.right = !this.right },
            h("i", { class: "fas fa-angle-double-left" })));
    }
    static get is() { return "obd-button-arrow"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["button-arrow.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button-arrow.css"]
    }; }
    static get properties() { return {
        "right": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "right",
            "reflect": true,
            "defaultValue": "false"
        }
    }; }
}
