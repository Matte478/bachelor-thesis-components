import { Host, h } from "@stencil/core";
export class PageNotFound {
    constructor() {
        this.status = '404';
        this.emoji = '¯\\(°_o)/¯';
        this.message = 'Táto stránka neexistuje.';
    }
    render() {
        return (h(Host, null,
            h("span", { class: "emoji" }, this.emoji),
            h("h1", { class: "status" }, this.status),
            h("h2", { class: "message" }, this.message)));
    }
    static get is() { return "obd-page-not-found"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["page-not-found.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["page-not-found.css"]
    }; }
    static get properties() { return {
        "status": {
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
            "attribute": "status",
            "reflect": false,
            "defaultValue": "'404'"
        },
        "emoji": {
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
            "attribute": "emoji",
            "reflect": false,
            "defaultValue": "'\u00AF\\\\(\u00B0_o)/\u00AF'"
        },
        "message": {
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
            "attribute": "message",
            "reflect": false,
            "defaultValue": "'T\u00E1to str\u00E1nka neexistuje.'"
        }
    }; }
}
