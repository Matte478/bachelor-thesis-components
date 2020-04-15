import { r as registerInstance, c as createEvent, h } from './core-1dbfc232.js';
var TableMenu = /** @class */ (function () {
    function TableMenu(hostRef) {
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
    TableMenu.prototype.action = function (e) {
        var action = e.detail.action;
        var id = e.detail.id;
        switch (action) {
            case 'edit':
                this.edit.emit(id);
                break;
            case 'delete':
                this.delete.emit(id);
                break;
        }
    };
    TableMenu.prototype.render = function () {
        var _this = this;
        return (h("div", null, h("obd-table", { data: this.meals, columns: JSON.stringify(this.columns), actions: JSON.stringify(this.tableActions), onAction: function (e) { return _this.action(e); } })));
    };
    Object.defineProperty(TableMenu, "style", {
        get: function () { return ":host{display:block}"; },
        enumerable: true,
        configurable: true
    });
    return TableMenu;
}());
export { TableMenu as obd_table_menu };
