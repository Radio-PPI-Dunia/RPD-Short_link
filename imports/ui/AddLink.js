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
                <button className="btn btn-default" onClick={() => this.setState({isOpen: true})}>+ Add Link</button>
                <Modal
                    ariaHideApp={false}
                    isOpen={this.state.isOpen}
                    contentLabel="Add Link"
                    onAfterOpen={() => this.refs.url.focus()}
                    onRequestClose={this.onHandelModalClose.bind(this)}
                    className="boxed-view__box"
                    overlayClassName="boxed-view boxes-view--modal"
                >
                    <form className="boxed-view__form" onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <h4 className="labelInput">Add Link</h4>
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
                        <button className="btn btn-primary button-addlinks">Add Link</button>
                        <button className="btn btn-default button-addlinks" onClick={this.onHandelModalClose.bind(this)}>Cancel</button>
                    </form>
                </Modal>
            </div>
        )
    }
}