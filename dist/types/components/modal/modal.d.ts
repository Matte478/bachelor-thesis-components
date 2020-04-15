import { EventEmitter } from '../../stencil.core';
export declare class Modal {
    modalTitle: string;
    modalSubtitle: string;
    active: boolean;
    maxWidth: string;
    closed: EventEmitter;
    watchHandler(newValue: boolean): void;
    handleKeyup(e: any): void;
    render(): any;
    componentDidLoad(): void;
    private disable;
    private open;
}
