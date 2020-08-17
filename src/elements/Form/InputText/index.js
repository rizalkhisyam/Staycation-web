import React, { useState } from 'react'
import propTypes from 'prop-types'

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
    if (type === "email") pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (type === "phone") pattern = "[0-9]*";

    const onChange = (event) => {
        const target = {
            target: {
                name: name,
                value: event.target.value
            },
        };

        if(type === "email"){
            if(!pattern.test(event.target.value)) setHasError(errorResponse);
            else setHasError(null);
        };

        if (type === "phone"){
            if (event.target.validity.valid) props.onChange(target);
        } else {
            props.onChange(target);
        }
    };

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
                name={name}
                type={type}
                pattern={pattern}
                className={["form-control", inputClassName].join(" ")}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
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

Text.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    onChange: propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append: propTypes.oneOfType([propTypes.number, propTypes.string]),
    type: propTypes.string,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
    inputClassName: propTypes.string,
};