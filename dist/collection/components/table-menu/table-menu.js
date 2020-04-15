import { h } from "@stencil/core";
export class TableMenu {
    constructor() {
        this.meals = '[{"id":35,"meal":"test","price":"12.00","menu_id":4}]';
        this.message = 'Táto stránka neexistuje.';
        this.columns = [
            {
                key: 'meal',
                text: 'Názov jedla',
            },
            {
                key: 'price',
                text: 'Cena',
                suffix: '€'
            },
        ];
        this.tableActions = [
            {
                action: 'edit',
                icon: 'fas fa-edit',
                color: '#2d4059',
            },
            {
                action: 'delete',
                icon: 'fas fa-trash-alt',
                color: '#ea5455',
            },
        ];
    }
    action(e) {
        const action = e.detail.action;
        const id = e.detail.id;
        switch (action) {
            case 'edit':
                this.edit.emit(id);
                break;
            case 'delete':
                this.delete.emit(id);
                break;
        }
    }
    render() {
        return (h("div", null,
            h("obd-table", { data: this.meals, columns: JSON.stringify(this.columns), actions: JSON.stringify(this.tableActions), onAction: e => this.action(e) })));
    }
    static get is() { return "obd-table-menu"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["table-menu.css"]
    }; }
    static get styleUrls() { return {
        "$": ["table-menu.css"]
    }; }
    static get properties() { return {
        "meals": {
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
            "attribute": "meals",
            "reflect": false,
            "defaultValue": "'[{\"id\":35,\"meal\":\"test\",\"price\":\"12.00\",\"menu_id\":4}]'"
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
    static get events() { return [{
            "method": "edit",
            "name": "edit",
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
        }, {
            "method": "delete",
            "name": "delete",
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
}
