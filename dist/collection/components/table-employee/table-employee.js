import { h } from "@stencil/core";
export class TableEmployee {
    constructor() {
        this.employees = '[]';
        this.columns = [
            {
                key: 'name',
                text: 'Meno',
            },
            {
                key: 'email',
                text: 'Email',
            },
            {
                key: 'type-of-employment',
                text: 'Druh pracovného pomeru',
            },
        ];
        this.tableActions = [
            {
                text: '',
                action: 'edit',
                icon: 'fas fa-edit',
                color: '#2d4059',
            },
            {
                text: '',
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
        return (h("obd-table", { data: this.employees, columns: JSON.stringify(this.columns), actions: JSON.stringify(this.tableActions), onAction: e => this.action(e) }));
    }
    static get is() { return "obd-table-employees"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["table-employee.css"]
    }; }
    static get styleUrls() { return {
        "$": ["table-employee.css"]
    }; }
    static get properties() { return {
        "employees": {
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
            "attribute": "employees",
            "reflect": false,
            "defaultValue": "'[]'"
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
