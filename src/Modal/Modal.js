import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './Modal.css';

export default class Modal extends Component {
    componentDidMount() {
        console.log("Modal componentDidMount");
    }
    componentWillUnmount() { console.log('Modal componentWillUnmount'); }
   

render() {
    return (
        <div className="Modal_backdrop">
            <div className="Modal_content">{this.props.children}</div>
        </div>

    );
}
}

