import { EventEmitter } from '../../stencil.core';
export declare class TableEmployee {
    employees: string;
    edit: EventEmitter;
    delete: EventEmitter;
    private columns;
    private tableActions;
    private action;
    render(): any;
}
