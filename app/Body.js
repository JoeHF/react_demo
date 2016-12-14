import React from 'react'

export default class Body extends React.Component {
    render() {
        var data = [1, 2, 3, 4];
        var data_column = data.map(function(d) {
            return (
                <td key={d.toString()}>
                    {d*2}
                </td>
            )
        });
         
        return (
            <tbody>
                <tr>
                    {data_column}
                    <td>
                        {this.props.data}
                    </td>
                </tr>
            </tbody>
        );
    }
}