import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import './index.scss';

export default function File(props) {

    const {
        name,
        value,
        accept,
        placeholder,
        prepend,
        append,
        outerClassName,
        inputClassName,
        errorResponse
    } = props;

    const refinputFile = useRef(null);

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
                type="file"
                accept={accept}
                ref={refinputFile}
                name={name}
                className="d-none"
                value={value}
                />

                <input 
                onClick={() => refinputFile.current.click()}
                defaultValue={value}
                placeholder={placeholder}
                className={["form-control", inputClassName].join(" ")}
                />
                {append && (
                    <div className="input-group-append bg-gray-900">
                        <div className="input-group-text">
                            {append}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

File.defaultProps = {
    placeholder: "Browse file here ..."
}

File.PropTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    onChange: PropTypes.func.isRequired,
    prepend: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    append:  PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    accept: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    outerClassName: PropTypes.string,
    inputClassName: PropTypes.string
};