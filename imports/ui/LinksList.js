import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker';
import { Links } from '../api/links';
import LinkListItem from '../ui/LinkListItem';

export default class LinksList extends Component {
    constructor(props){
        super(props);

        this.state = {
            links: []
        }
    }

    componentDidMount(){
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find({
                visible: true
            }).fetch();
            this.setState({ links });
        });
    }

    componentWillUnmount(){
        this.linksTracker.stop();
    }

    renderLinksListItems(){
        // mapping links list
        return this.state.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinkListItem key={link._id} shortUrl={shortUrl} {...link}/>;
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