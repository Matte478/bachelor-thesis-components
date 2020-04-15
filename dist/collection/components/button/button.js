import { h } from "@stencil/core";
export class Button {
    constructor() {
        this.block = false;
    }
    render() {
        return (h("button", { type: this.type, class: { block: this.block } },
            h("slot", null)));
    }
    static get is() { return "obd-button"; }
    static get encapsulation() { return "scoped"; }
    static get originalStyleUrls() { return {
        "$": ["button.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["button.css"]
    }; }
    static get properties() { return {
        "type": {
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
            "attribute": "type",
            "reflect": false
        },
        "block": {
            "type": "boolean",
            "mutable": false,
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
            "attribute": "block",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
}
