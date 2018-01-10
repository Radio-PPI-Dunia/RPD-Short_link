import React, { Component } from 'react';

export default class AddLink extends Component {
    constructor(props){
        super(props);

        this.state = {
            url: '',
        }
    }

    onSubmit(e){
        const {url} = this.state;

        e.preventDefault();

        if (url) {
            Meteor.call('links.insert', url, (err, res) => {
                if (!err){
                    this.setState({ url: '' })
                }
            });
        }
    }

    onChange(e){
        this.setState({
            url: e.target.value
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Add Link</label>
                        <input
                            onChange={this.onChange.bind(this)}
                            type="text"
                            placeholder="Add URL"
                            className="form-control"
                            value={this.state.url}/>
                    </div>
                    <button className="btn btn-primary">Add Link</button>
                </form>
            </div>
        )
    }
}