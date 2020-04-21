import { EventEmitter } from '../../stencil.core';
export declare class TableMenu {
    meals: string;
    edit: EventEmitter;
    delete: EventEmitter;
    private columns;
    private tableActions;
    private action;
    render(): any;
}
