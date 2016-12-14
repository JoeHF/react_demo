import React from 'react';
import './css/MyNewsItem.css'
import Head from './Head.js'
import Body from './Body.js'

export default class MyNewsItem extends React.Component {
    render() {
        return (
            <table className='r-table'>
                <Head />
                <Body />
            </table>
        );
    }
}

