import React, { useRef, useState } from 'react'
import propTypes from 'prop-types'

import './index.scss';

export default function File(props) {

    const [FileName, setFileName] = useState("");
    
    const {
        name,
        value,
        accept,
        placeholder,
        prepend,
        append,
        outerClassName,
        inputClassName
    } = props;

    const refinputFile = useRef(null);

    const onChange = (event) => {
        setFileName(event.target.value);
        props.onChange({
            target: {
            name: event.target.name,
            value: event.target.files,
            },
        });
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
                type="file"
                accept={accept}
                ref={refinputFile}
                name={name}
                className="d-none"
                value={FileName}
                onChange={onChange}
                />

                <input 
                onClick={() => refinputFile.current.click()}
                defaultValue={FileName}
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

File.propTypes = {
    name: propTypes.string.isRequired,
    value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
    onChange: propTypes.func.isRequired,
    prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
    append:  propTypes.oneOfType([propTypes.number, propTypes.string]),
    accept: propTypes.string.isRequired,
    placeholder: propTypes.string,
    outerClassName: propTypes.string,
    inputClassName: propTypes.string
};