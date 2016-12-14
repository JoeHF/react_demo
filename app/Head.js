import React from 'react'

export default class Head extends React.Component {
    render() {
        var data = [1, 2, 3, 4, 5];
        var data_column = data.map(function(d) {
            return (
                <th key={d.toString()}>
                    {d*1}
                </th>
            )
        });
        return (
            <thead>
                <tr>
                    {data_column}
                </tr>
            </thead>
        );
    }
}