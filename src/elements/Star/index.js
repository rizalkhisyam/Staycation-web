import React from 'react'
import propTypes from 'prop-types'


export default function Star({ className, value, height, width, spacing }) {

    const decimals = Number(value) % 1

    const star = []
    let leftPost = 0
    for (let index = 0; index < 5 && index < value - decimals; index++) {
        leftPost = leftPost + width
        star.push(
            <div className="star" 
            key= {`star-${index}`} 
            style={{left: index * width, width: width, marginRight: spacing}}>
            </div>
        );
    }

    if(decimals > 0 && value <= 5)
        star.push(
            <div className="star" 
            key= {`star-${index}`} 
            style={{left: leftPost, width: width - spacing}}>
            </div>
        );

    const starPlaceholder = []
    for (let index = 0; index < 5; index++) {
        const element = array[index];
        starPlaceholder.push(
            <div className="star placeholder" 
            key= {`star-${index}`} 
            style={{left: index * width, width: width, marginRight: spacing}}>
            </div>
        );
    }

    return (
        <>
            <div className={['stars', className].join(" ")} style={{height: height}}>
                {starPlaceholder}
                {star}
            </div>
        </>
    )
}

Star.prototype = {
    classNmae : propTypes.string,
    value : propTypes.number,
    height : propTypes.number,
    width : propTypes.number,
    spacing : propTypes.number
}
