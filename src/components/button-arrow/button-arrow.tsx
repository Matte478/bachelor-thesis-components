import { Component, h, Prop } from '@stencil/core'

@Component({
    tag: 'obd-button-arrow',
    styleUrl: 'button-arrow.scss',
    shadow: true
})
export class ButtonArrow {
    @Prop({
        mutable: true,
        reflect: true
    }) right: boolean = false

    render() {
        return (
            <button
                class={'arrow ' + (this.right ? 'right' : '')}
                onClick={() => this.right = !this.right}
            >
                <i class="fas fa-angle-double-left" />
            </button>
        )
    }
}
