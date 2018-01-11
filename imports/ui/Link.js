import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PrivateHeader from '../ui/PrivateHeader';
import AddLink from '../ui/AddLink';
import LinksList from '../ui/LinksList';
import LinksListFilter from '../ui/LinksListFilter';

export default class Link extends Component {

    componentWillMount(){
        if (!Meteor.userId()){
            this.props.history.replace('/');
        }
    }

    render(){
        return(
            <div>
                <PrivateHeader title='Dashboard'/>
                <div className="page_content">
                    <LinksListFilter/>
                    <AddLink/>
                    <LinksList/>
                </div>
            </div>
         )
    }
}