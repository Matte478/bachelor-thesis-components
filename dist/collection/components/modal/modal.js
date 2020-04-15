import { h } from "@stencil/core";
export class Modal {
    constructor() {
        this.active = false;
    }
    watchHandler(newValue) {
        if (newValue)
            document.body.classList.add('overlay');
        else
            document.body.classList.remove('overlay');
    }
    handleKeyup(e) {
        if (e.keyCode == 27) {
            this.disable();
        }
    }
    render() {
        return (h("div", { class: "modal", style: { display: this.active ? 'block' : 'none' } },
            h("header", { class: "modal__header" },
                h("div", { class: "card__header_text" },
                    h("p", { class: "modal__header_title" }, this.modalTitle),
                    h("p", { class: "modal__header_subtitle" }, this.modalSubtitle)),
                h("slot", { name: "controls" }),
                h("button", { class: "modal__header_close", onClick: () => this.disable() },
                    h("i", { class: "fas fa-times" }))),
            h("div", { class: "modal__body" },
                h("slot", null))));
    }
    componentDidLoad() {
        if (this.active)
            document.body.classList.add('overlay');
    }
    disable() {
        this.active = false;
        this.closed.emit();
    }
    static get is() { return "obd-modal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["modal.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["modal.css"]
    }; }
    static get properties() { return {
        "modalTitle": {
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
            "attribute": "modal-title",
            "reflect": false
        },
        "modalSubtitle": {
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
            "attribute": "modal-subtitle",
            "reflect": false
        },
        "active": {
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
            "attribute": "active",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get events() { return [{
            "method": "closed",
            "name": "closed",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "active",
            "methodName": "watchHandler"
        }]; }
    static get listeners() { return [{
            "name": "keyup",
            "method": "handleKeyup",
            "target": "window",
            "capture": false,
            "passive": false
        }]; }
}
