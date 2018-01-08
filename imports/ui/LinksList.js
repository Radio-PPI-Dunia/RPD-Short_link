import React, { Component } from 'react';
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';

export default class LinksList extends Component {
    constructor(props){
        super(props);

        this.state = {
            links: []
        }
    }

    componentDidMount(){
        this.linksTracker = Tracker.autorun(() => {
            const links = Links.find().fetch();
            this.setState({ links });
        });
    }

    componentWillUnmount(){
        console.log("componentWillUnmount LinksList");
        this.linksTracker.stop();
    }

    renderLinksListItems(){
        // mapping links list
        return this.state.links.map((link) => {
            return <p key={link._id} >{link.url}</p>
        })
    }

    render(){
        return (
            <div>
                <h2>Link List</h2>
                <div>
                    <ul>
                        {this.renderLinksListItems()}
                    </ul>
                </div>
            </div>
        )
    }

}