import React, {Component} from 'react';

import InputNumber from 'elements/Form/InputNumber';

export default class Example extends Component {
    state = {
        value : "1"
    };

    handleCange = e => {
        this.setState({ [e.target.name] : e.target.value });
    };

    render(){
        return (

            <div className="container">
                <div className="row align-items-center justify-content-center" style={{height: "100vh"}}>
                    <div className="col-auto">
                    <InputNumber
                    max={30}
                    suffix=" night"
                    isSuffixPlural
                    onChange={this.handleCange}
                    name="value"
                    value={this.state.value}
                    >
                    </InputNumber>
                    </div>
                </div>
            </div>
            
        )
    }
}