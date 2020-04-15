import { EventEmitter } from '../../stencil.core';
export declare class TableMenu {
    meals: string;
    message: string;
    edit: EventEmitter;
    delete: EventEmitter;
    private columns;
    private tableActions;
    private action;
    render(): any;
}
