import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'obd-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {

    @Prop() cardTitle: string;
    @Prop() cardSubtitle: string;

    render() {
        return (
            <div class="card">
                <header class="card__header">
                    <p class="card__header_title">{this.cardTitle}</p>
                    <p class="card__header_subtitle">{this.cardSubtitle}</p>
                </header>
                <div class="card__body">
                    <slot></slot>
                </div>
            </div>
        );
    }

}
