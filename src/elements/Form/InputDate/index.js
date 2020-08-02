import React, {useState, useRef, useEffect} from 'react';
import propTypes from 'prop-types'

import {DateRange} from 'react-date-range';

import './index.scss';
import 'react-date-range/dist/styles.css'; //from main css file in react-date-range
import 'react-date-range/dist/theme/default.css';

import formatDate from 'utils/formatDate';
import iconCalender from 'assets/images/icons/ic_calender.svg';


export default function Date(props) {

    const { value, placeholder, name } = props;
    const [ isShowed, setIsShowed ] = useState(false);

    const datePickerChange = value => {
        const target = {
            target: {
                value: value.selection,
                name: name
            }
        };
        props.onChange(target);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const refDate = useRef(null);
    const handleClickOutside = event => {
        if (refDate && !refDate.current.contains(event.target)){
            setIsShowed(false);
        }
    };

    const check = focus => {
        focus.indexOf(1) < 0 && setIsShowed(false);
    };

    const displayDate = `${value.startDate ? formatDate(value.startDate) : "" }
    ${value.endDate ? " - " + formatDate(value.endDate) : ""}`;

    return (
        <div>
            
        </div>
    )
}

Date.propTypes = {
    value: propTypes.object,
    onChange: propTypes.func,
    placeholder: propTypes.string,
    outerClassName: propTypes.string
}

