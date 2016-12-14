import React from 'react';
import axios from 'axios';
import './css/MyNewsItem.css'
import Head from './Head.js'
import Body from './Body.js'

export default class MyNewsItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageList:[] 
        };
    };

    componentDidMount() {
        axios.get('/pageList.json').then(function(response){
                console.log(response.data);
                this.setState({
                    pageList:response.data
                });
            }.bind(this)).catch(function(response){
                console.log(response);
            });
    }

    render() {
        var pageIndex=0;
        var pageItems=this.state.pageList.map(function(pageItem){
            pageIndex++;
            console.log(pageIndex);
            return (
                <Body data={pageItem.name} key={pageItem.id.toString()}/>
            );
        });
        return (
            <table className='r-table'>
                <Head />
                {pageItems}
            </table>
        );
    }
}

