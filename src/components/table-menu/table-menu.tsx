import { Component, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'obd-table-menu',
    styleUrl: 'table-menu.css',
    shadow: true
})
export class TableMenu {
    @Prop() meals: string = '[]'

    @Event() edit: EventEmitter
    @Event() delete: EventEmitter

    private columns = [
        {
            key: 'meal',
            text: 'Názov jedla',
        },
        {
            key: 'price',
            text: 'Cena',
            suffix: '€'
        },
    ];

    private tableActions = [
        {
            action: 'edit',
            icon: 'fas fa-edit',
            color: '#2d4059',
        },
        {
            action: 'delete',
            icon: 'fas fa-trash-alt',
            color: '#ea5455',
        },
    ];

    private action(e) {
        const action = e.detail.action
        const id = e.detail.id

        switch (action) {
            case 'edit':
                this.edit.emit(id)
                break
            case 'delete':
                this.delete.emit(id)
                break
        }
    }

    render() {
        return (
            <div>
                <obd-table
                    data={this.meals}
                    columns={JSON.stringify(this.columns)}
                    actions={JSON.stringify(this.tableActions)}
                    onAction={e => this.action(e)}
                />
            </div>
        )
    }
}
