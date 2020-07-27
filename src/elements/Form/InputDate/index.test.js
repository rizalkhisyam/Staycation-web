import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import InputNumber from './index';

class TestInput extends React.Component {
    state = {
        value : ""
    };

    handleCange = e => {
        this.setState({ [e.target.name] : e.target.value });
    };

    render(){
        return (
            <InputNumber
            max={30}
            onChange={this.handleCange}
            name="value"
            value={this.state.value}
            >
            </InputNumber>
        )
    }

}