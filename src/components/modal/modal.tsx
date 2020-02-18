import { Component, Prop, Event, h, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'obd-modal',
  styleUrl: 'modal.scss',
  shadow: true
})
export class Modal {
    @Prop() cardTitle: string;
    @Prop() cardSubtitle: string;
    @Prop() active!: boolean;
    
    @State() activated: boolean = this.active;

    @Event() closed: EventEmitter;



    render() {
        return (
            <div class="modal" style={{ display: this.active ? 'block' : 'none' }}>
                <header class="modal__header">
                    <p class="modal__header_title">{this.cardTitle}</p>
                    <p class="modal__header_subtitle">{this.cardSubtitle}</p>
                    <button class="modal__header_close" onClick={() => this.disable()}>X</button>
                </header>
                <div class="modal__body">
                    <slot></slot>
                </div>
            </div>
        );
    }

    disable() {
        this.active = false;
        document.body.classList.remove('overlay');
    }

}
