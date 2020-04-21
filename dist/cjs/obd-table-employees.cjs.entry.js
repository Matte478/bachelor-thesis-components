'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-5439e6c7.js');

const TableEmployee = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
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
        this.edit = core.createEvent(this, "edit", 7);
        this.delete = core.createEvent(this, "delete", 7);
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
        return (core.h("obd-table", { data: this.employees, columns: JSON.stringify(this.columns), actions: JSON.stringify(this.tableActions), onAction: e => this.action(e) }));
    }
    static get style() { return ":host{display:block}"; }
};

exports.obd_table_employees = TableEmployee;
