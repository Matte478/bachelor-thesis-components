import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'obd-table',
  styleUrl: 'table.scss',
  shadow: true
})
export class Table {
    @Prop() data: string;
    @State() innerData: object;

    componentWillLoad() {
        this.dataDidChangeHandler(this.data);
    }
    
    @Watch('data')
    dataDidChangeHandler(newValue: string) {
        this.innerData = JSON.parse(newValue);
    }

    getRow(item) {
        let arr = [];
        Object.keys(item).forEach(function(key) {
            arr.push(item[key]);
        });
        
        return <tr>
            { arr.map(item => <td>{item}</td>) }
        </tr>;
    }


    render() {
        return (
            <table>
                {this.innerData.map(item => {
                    return this.getRow(item);
                })}
            </table>
        );
    }

}
