import React, { Component } from 'react';
import './style.css';

export class Form extends Component {

    render() {
        return (
            <form
                onSubmit={ this.validate } >
                    {this.props.children}
            </form>
        )
    }
}

export default Form;
