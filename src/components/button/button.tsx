import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'obd-button',
  styleUrl: 'button.scss',
  shadow: false,
  scoped: true
})
export class Button {

    @Prop() type: string;
    @Prop() block: boolean = false;

    render() {
        return (
            <button type={this.type} class={{ block: this.block }}>
                <slot></slot>
            </button>
        );
    }
}
