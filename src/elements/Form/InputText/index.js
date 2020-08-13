import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './index.scss';

export default function Text(props) {

    const {
        name,
        value,
        type,
        placeholder,
        prepend,
        append,
        outerClassName,
        inputClassName,
        errorResponse
    } = props;

    const [hasError, setHasError] = useState(null);
    let pattern = "";
    if(type === 'email') pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(type === 'tel') pattern = "[0-9]*";

    onChange = (event) => {
        const target = {
            target: {
                name: name,
                value: event.target.value
            }
        };

        if(type === "email"){
            if(!pattern.test(event.target.value)) setHasError(errorResponse);
            else{
                setHasError("");   
            }
        };

        if(type === "tel"){
            if(event.target.validity.valid) props.onChange(target);
        }else {
            props.onChange(target);
        }
    }

    return (
        <div className={["input-text mb-3", outerClassName].join(" ")}>
            <div className="input-group">
                {prepend && (
                    <div className="input-group-prepend bg-gray-900">
                        <span className="input-group-text">
                            {prepend}
                        </span>
                    </div>
                )}
            
                <input 
                className={["form-control", inputClassName].join(" ")}
                type={type}
                pattern={pattern}
                name={name}
                placeholder={placeholder}
                value = {value}
                onChange = {onChange}
                >
                </input>
                
                {append && (
                    <div className="input-group-append bg-gray-900">
                        <span className="input-group-text">
                            {append}
                        </span>
                    </div>
                )}

            </div>
            {hasError && (
                <span className="error-helper">
                    {hasError}
                </span>
            )}
        </div>
    )
}

Text.defaultProps = {
    type: "text",
    pattern: "",
    placeholder: "Please type here ...",
    errorResponse: "Please match the requested fromat."
}

Text.PropTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
    prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    append:  PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    type: PropTypes.string,
    placeholder: PropTypes.string,
    outerClassName: PropTypes.string,
    inputClassName: PropTypes.string
};