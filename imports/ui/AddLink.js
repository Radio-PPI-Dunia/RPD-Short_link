import React, { Component } from 'react';

export default class AddLink extends Component {
    onSubmit(e){
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if (url) {
            Meteor.call('links.insert', url);
            this.refs.url.value = '';
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Add Link</label>
                        <input type="text" ref="url" placeholder="Add URL" className="form-control"/>
                    </div>
                    <button className="btn btn-primary">Add Link</button>
                </form>
            </div>
        )
    }
}