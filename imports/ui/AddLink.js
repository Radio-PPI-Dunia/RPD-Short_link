import React, {Component} from "react";
import Modal from "react-modal";

export default class AddLink extends Component {
    constructor(props) {
        super(props);

        this.state = {
            url: '',
            isOpen: false,
            error: ''
        }
    }

    onSubmit(e) {
        const {url} = this.state;

        e.preventDefault();

        Meteor.call('links.insert', url, (err, res) => {
            if (!err) {
                this.onHandelModalClose()
            } else {
                this.setState({ error: err.reason })
            }
        });
    }

    onChange(e) {
        this.setState({
            url: e.target.value
        });
    }

    onHandelModalClose(){
        this.setState({ url: '', isOpen: false, err: '' })
    }

    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
                <Modal
                    isOpen={this.state.isOpen}
                    contentLabel="Add Link"
                    onAfterOpen={() => this.refs.url.focus()}
                    onRequestClose={this.onHandelModalClose.bind(this)}
                >
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <label>Add Link</label>
                            {this.state.error ? <div className="alert alert-danger">{this.state.error}</div> : undefined }
                            <input
                                onChange={this.onChange.bind(this)}
                                type="text"
                                placeholder="Add URL"
                                ref="url"
                                className="form-control"
                                value={this.state.url}
                            />
                        </div>
                        <button className="btn btn-primary">Add Link</button>
                    </form>
                    <button className="btn btn-warning" onClick={this.onHandelModalClose.bind(this)}>Cancel
                    </button>
                </Modal>
            </div>
        )
    }
}