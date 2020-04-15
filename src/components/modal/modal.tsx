import { Component, Prop, Event, h, Host, EventEmitter, Watch, Listen } from '@stencil/core'

@Component({
    tag: 'obd-modal',
    styleUrl: 'modal.scss',
    shadow: true
})
export class Modal {
    @Prop() modalTitle: string
    @Prop() modalSubtitle: string
    @Prop({
        mutable: true,
        reflect: true
    }) active: boolean = false
    @Prop() maxWidth: string = '700px'

    @Event() closed: EventEmitter

    @Watch('active')
    watchHandler(newValue: boolean) {
        if (newValue)
            this.open()
        else
            this.disable()
    }

    @Listen('keyup', { target: 'window' })
    handleKeyup(e) {
        if (e.keyCode == 27)
            this.active = false
    }

    render() {
        return (
            <Host style={{ 'display': this.active ? 'block' : 'none' }}>
                <div class="wrapper">
                    <div class="modal" style={{ 'max-width': this.maxWidth }}>
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
                </div>
            </Host>
        )
    }

    componentDidLoad() {
        if (this.active)
            this.open()
    }

    private disable() {
        this.active = false
        document.body.classList.remove('overlay')
        document.body.style.overflow = 'initial'
        this.closed.emit()
    }

    private open() {
        document.body.classList.add('overlay')
        document.body.style.overflow = 'hidden'
    }
}
