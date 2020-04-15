import { EventEmitter } from '../../stencil.core';
export declare class Table {
    data: string;
    layout: string;
    actions: string;
    columns: string;
    innerData: Array<any>;
    innerActions: Array<any>;
    innerColumns: Array<any>;
    action: EventEmitter;
    componentWillLoad(): void;
    dataDidChangeHandler(newValue: string): void;
    actionsDidChangeHandler(newValue: string): void;
    columnsDidChangeHandler(newValue: string): void;
    private getHeader;
    private getRow;
    private getActions;
    render(): any;
}
