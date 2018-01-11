import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import Clipboard from 'clipboard';

export default class LinkListItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            justCopied: false,
        }
    }

    componentDidMount(){
       this.clipboard = new Clipboard(this.refs.copy);

       this.clipboard.on('success', () => {
           this.setState({ justCopied: true });
           setTimeout(() => {
               this.setState({
                   justCopied: false,
               })
           }, 400)
       }).on('error', () => {
           this.setState({
               justCopied: false,
           })
       })
    }

    componentWillUnmount(){
        this.clipboard.destroy();
    }

    render() {
        return (
            <div>
                <h3>{this.props.url}</h3>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                <p>Visit Count: {this.props.visitedCount}</p>
                <p>Last visited at: {this.props.lastVisitedAt}</p>
                <button className="btn btn-primary" ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.justCopied ? 'Copied' : 'Copy' }</button>
                <button className="btn btn-danger" onClick={() => {
                    Meteor.call('links.setVisible', this.props._id, !this.props.visible)
                }}>
                    {this.props.visible ? 'Hide' : 'Unhide'}
                </button>
            </div>
        )
    }
}
