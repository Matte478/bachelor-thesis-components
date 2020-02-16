import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'obd-button',
  styleUrl: 'button.scss',
  shadow: false,
  scoped: true
})
export class Button {

    @Prop() type: string;

    render() {
        return (
            <button type={this.type} class="btn">
                <slot></slot>
            </button>
        );
    }
}
