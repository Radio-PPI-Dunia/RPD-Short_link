import React, {Component} from "react";
import { Link } from 'react-router-dom'

export default class NoMatch extends Component {
    render() {
        return (
            <div className="boxed-view">
                <div className="boxed-view__box">
                    <h4 className="text-center">Ooops! The page doesn't exist</h4>
                    <Link to="/" className="btn btn-primary">Back to home</Link>
                </div>
            </div>
        )
    }
}