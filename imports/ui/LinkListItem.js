import { Meteor } from 'meteor/meteor';
import React, {Component} from "react";
import Clipboard from 'clipboard';
import moment from 'moment';

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

    renderStats(){
        const visitMesage = this.props.visitedCount === 1 ? 'visit' : 'visits';
        let visitedMessage = null;

        if (typeof this.props.lastVisitedAt === 'number'){
            visitedMessage = `(visited ${ moment(this.props.lastVisitedAt).fromNow() })`
        }

        return <p>{this.props.visitedCount} {visitMesage} {visitedMessage}</p>
    }

    render() {
        return (
            <div>
                <h3>{this.props.url}</h3>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                {this.renderStats()}
                <a className="btn btn-primary button-linkslist" href={this.props.shortUrl} target="_blank">Visit</a>
                <button className="btn btn-primary button-linkslist" ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.justCopied ? 'Copied' : 'Copy' }</button>
                <button className="btn btn-danger button-linkslist" onClick={() => {
                    Meteor.call('links.setVisible', this.props._id, !this.props.visible)
                }}>
                    {this.props.visible ? 'Hide' : 'Unhide'}
                </button>
            </div>
        )
    }
}
