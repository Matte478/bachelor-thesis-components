import { h } from "@stencil/core";
export class Card {
    render() {
        return (h("div", { class: "card" },
            h("header", { class: "card__header" },
                h("div", { class: "card__header_text" },
                    h("p", { class: "card__header_title" }, this.cardTitle),
                    h("p", { class: "card__header_subtitle" }, this.cardSubtitle)),
                h("slot", { name: "controls" })),
            h("div", { class: "card__body" },
                h("slot", null))));
    }
    static get is() { return "obd-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["card.css"]
    }; }
    static get properties() { return {
        "cardTitle": {
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
            "attribute": "card-title",
            "reflect": false
        },
        "cardSubtitle": {
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
            "attribute": "card-subtitle",
            "reflect": false
        }
    }; }
}
