import { Component, h, Prop, Event, EventEmitter } from '@stencil/core'

@Component({
    tag: 'obd-table-employees',
    styleUrl: 'table-employee.css',
    shadow: true
})
export class TableEmployee {
    @Prop() employees: string = '[]'

    @Event() edit: EventEmitter
    @Event() delete: EventEmitter

    private columns = [
        {
            key: 'name',
            text: 'Meno',
        },
        {
            key: 'email',
            text: 'Email',
        },
        {
            key: 'type-of-employment',
            text: 'Druh pracovného pomeru',
        },
    ];

    private tableActions = [
        {
            text: '',
            action: 'edit',
            icon: 'fas fa-edit',
            color: '#2d4059',
        },
        {
            text: '',
            action: 'delete',
            icon: 'fas fa-trash-alt',
            color: '#ea5455',
        },
    ]

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
            <obd-table
                data={this.employees}
                columns={JSON.stringify(this.columns)}
                actions={JSON.stringify(this.tableActions)}
                onAction={e => this.action(e)}
            />
        )
    }

}
