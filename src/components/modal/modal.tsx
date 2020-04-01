import { Component, Prop, Event, h, EventEmitter, Watch, Listen } from '@stencil/core';

@Component({
  tag: 'obd-modal',
  styleUrl: 'modal.scss',
  shadow: true
})
export class Modal {
    @Prop() modalTitle: string;
    @Prop() modalSubtitle: string;
    @Prop() active: boolean = false;

    @Event() closed: EventEmitter;

    @Watch('active')
    watchHandler(newValue: boolean) {
        if(newValue)
            document.body.classList.add('overlay');
        else
            document.body.classList.remove('overlay');
    }

    @Listen('keyup', { target: 'window' })
    handleKeyup(e) {
        if(e.keyCode == 27) {
            this.disable();
        }
    }

    render() {
        return (
            <div class="modal" style={{ display: this.active ? 'block' : 'none' }}>
                <header class="modal__header">
                    <div class="card__header_text">
                        <p class="modal__header_title">{this.modalTitle}</p>
                        <p class="modal__header_subtitle">{this.modalSubtitle}</p>
                    </div>
                    <slot name="controls" />

                    <button class="modal__header_close" onClick={() => this.disable()}>
                        <i class="fas fa-times"></i>
                    </button>
                </header>
                <div class="modal__body">
                    <slot />
                </div>
            </div>
        );
    }

    componentDidLoad() {
        if(this.active)
            document.body.classList.add('overlay');
    }

    disable() {
        this.active = false;
        this.closed.emit();
    }

}
