import { EventEmitter } from '../../stencil.core';
export declare class Modal {
    modalTitle: string;
    modalSubtitle: string;
    active: boolean;
    closed: EventEmitter;
    watchHandler(newValue: boolean): void;
    handleKeyup(e: any): void;
    render(): any;
    componentDidLoad(): void;
    disable(): void;
}
