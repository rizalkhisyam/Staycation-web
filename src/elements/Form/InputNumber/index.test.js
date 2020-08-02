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

const setup = () => {
    const { container } = render(<TestInput/>);
    const input = container.querySelector(`input.form-control[name='value']`);

    return {
        input
    };
}

test("harus bisa mengubah value dari form", () => {
    const {input} = setup();

    fireEvent.change(input, {target: { value: 23 }});
    expect(input.value).toBe("23");
});

test("should not be able to change when reach max value", () => {
    const {input} = setup();

    fireEvent.change(input, {target: {value: 33}});
    expect(input.value).toBe("")
})