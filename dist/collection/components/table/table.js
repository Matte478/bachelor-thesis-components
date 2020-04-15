import { h } from "@stencil/core";
export class Table {
    constructor() {
        this.layout = 'inherit';
        this.actions = '[]';
        this.columns = '[]';
    }
    componentWillLoad() {
        this.dataDidChangeHandler(this.data);
        this.actionsDidChangeHandler(this.actions);
        this.columnsDidChangeHandler(this.columns);
    }
    dataDidChangeHandler(newValue) {
        this.innerData = JSON.parse(newValue);
    }
    actionsDidChangeHandler(newValue) {
        this.innerActions = JSON.parse(newValue);
    }
    columnsDidChangeHandler(newValue) {
        this.innerColumns = JSON.parse(newValue);
    }
    getHeader() {
        return h("tr", null,
            this.innerColumns.map(item => h("th", null, item.text)),
            (this.innerActions.length > 0) && h("th", null));
    }
    getRow(item) {
        let arr = [];
        this.innerColumns.forEach(column => {
            let td = '';
            if (typeof column.prefix !== 'undefined')
                td += column.prefix;
            td += item[column.key];
            if (typeof column.suffix != 'undefined')
                td += column.suffix;
            arr.push(td);
        });
        return h("tr", null,
            arr.map(item => h("td", null, item)),
            this.getActions(item.id));
    }
    getActions(id) {
        if (this.innerActions.length)
            return h("td", { class: "action" }, this.innerActions.map(item => h("button", { class: "action__btn", onClick: () => this.action.emit({ 'id': id, 'action': item.action }), style: { 'background-color': item.color } },
                h("i", { class: item.icon }),
                item.text)));
        else
            return '';
    }
    render() {
        return (h("table", { style: { tableLayout: this.layout } },
            this.getHeader(),
            this.innerData.map(item => {
                return this.getRow(item);
            })));
    }
    static get is() { return "obd-table"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["table.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["table.css"]
    }; }
    static get properties() { return {
        "data": {
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
            "attribute": "data",
            "reflect": false
        },
        "layout": {
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
            "attribute": "layout",
            "reflect": false,
            "defaultValue": "'inherit'"
        },
        "actions": {
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
            "attribute": "actions",
            "reflect": false,
            "defaultValue": "'[]'"
        },
        "columns": {
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
            "attribute": "columns",
            "reflect": false,
            "defaultValue": "'[]'"
        }
    }; }
    static get states() { return {
        "innerData": {},
        "innerActions": {},
        "innerColumns": {}
    }; }
    static get events() { return [{
            "method": "action",
            "name": "action",
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
            "propName": "data",
            "methodName": "dataDidChangeHandler"
        }, {
            "propName": "actions",
            "methodName": "actionsDidChangeHandler"
        }, {
            "propName": "columns",
            "methodName": "columnsDidChangeHandler"
        }]; }
}
