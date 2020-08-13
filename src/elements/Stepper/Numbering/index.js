import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'

import './index.scss';

export default function Numbering({ style, className, data, current }) {
    
    const keysOfData = Object.keys(data);

    return (
        <Fade>
            <ol className={['stepper', className].join(" ")} style={style}>
                {keysOfData.map((list, index) => {
                    let isActive = list === current ? "active" : "";
                    if(index + 1 === keysOfData.length){
                        isActive = "";
                        return null;
                    }

                    return(
                        <li key={`list-${index}`} className={[isActive].join(" ")}>
                            {index + 1}
                        </li>
                    );
                    
                })}
            </ol>        
        </Fade>
    )
}

Numbering.PropTypes = {
    className: PropTypes.string,
    data : PropTypes.object,
    current : PropTypes.string
}
