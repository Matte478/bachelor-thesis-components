import { Component, Host, h, Prop } from '@stencil/core'

@Component({
    tag: 'obd-page-not-found',
    styleUrl: 'page-not-found.scss',
    shadow: true
})
export class PageNotFound {
    @Prop() status: string = '404'
    @Prop() emoji: string = '¯\\(°_o)/¯'
    @Prop() message: string = 'Táto stránka neexistuje.'

    render() {
        return (
            <Host>
                <span class="emoji">{this.emoji}</span>
                <h1 class="status">{this.status}</h1>
                <h2 class="message">{this.message}</h2>
            </Host>
        )
    }
}
