import { r as registerInstance, c as createEvent, h } from './core-1dbfc232.js';

const TableMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        this.edit = createEvent(this, "edit", 7);
        this.delete = createEvent(this, "delete", 7);
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
        return (h("div", null, h("obd-table", { data: this.meals, columns: JSON.stringify(this.columns), actions: JSON.stringify(this.tableActions), onAction: e => this.action(e) })));
    }
    static get style() { return ":host{display:block}"; }
};

export { TableMenu as obd_table_menu };
