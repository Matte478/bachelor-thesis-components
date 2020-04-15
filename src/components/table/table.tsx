import { Component, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'obd-table',
    styleUrl: 'table.scss',
    shadow: true
})
export class Table {
    @Prop() data: string = '{}';
    @Prop() layout: string = 'inherit';
    @Prop() actions: string = '[]';
    @Prop() columns: string = '[]';

    @State() innerData: Array<any>
    @State() innerActions: Array<any>
    @State() innerColumns: Array<any>

    @Event() action: EventEmitter

    componentWillLoad() {
        this.dataDidChangeHandler(this.data)
        this.actionsDidChangeHandler(this.actions)
        this.columnsDidChangeHandler(this.columns)
    }

    @Watch('data')
    dataDidChangeHandler(newValue: string) {
        this.innerData = JSON.parse(newValue)
    }
    @Watch('actions')
    actionsDidChangeHandler(newValue: string) {
        this.innerActions = JSON.parse(newValue)
    }
    @Watch('columns')
    columnsDidChangeHandler(newValue: string) {
        this.innerColumns = JSON.parse(newValue)
    }

    private getHeader() {
        return <tr>
            {this.innerColumns.map(item =>
                <th>{item.text}</th>
            )}
            {(this.innerActions.length > 0) && <th></th>}
        </tr>
    }

    private getRow(item) {
        let arr = []

        this.innerColumns.forEach(column => {
            let td = ''

            if (typeof column.prefix !== 'undefined')
                td += column.prefix

            if (typeof item[column.key] !== 'undefined')
                td += item[column.key]
            else
                td += ''

            if (typeof column.suffix != 'undefined')
                td += column.suffix

            arr.push(td)
        })

        return <tr>
            {arr.map(item => <td>{item}</td>)}
            {this.getActions(item.id)}
        </tr>
    }

    private getActions(id) {
        if (this.innerActions.length)
            return <td class="action">
                {this.innerActions.map(item =>
                    <button
                        class="action__btn"
                        onClick={() => this.action.emit({ 'id': id, 'action': item.action })}
                        style={{ 'background-color': item.color }}
                    ><i class={item.icon}></i>{item.text}</button>
                )}
            </td>
        else
            return ''
    }

    render() {
        return (
            <table style={{ tableLayout: this.layout }}>
                {this.getHeader()}
                {this.innerData.map(item => {
                    return this.getRow(item)
                })}
            </table>
        )
    }
}