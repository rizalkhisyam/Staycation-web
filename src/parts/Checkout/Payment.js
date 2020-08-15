import React from 'react'
import Fade from 'react-reveal/Fade'

import InputText from 'elements/Form/InputText'
import InputFile from 'elements/Form/InputFile'

export default function Payment(props) {

    const { data, ItemDetails, checkout } = props;

    const tax = 10;
    const subTotal = ItemDetails.price * checkout.duration;
    const grandTotal = (subTotal * tax) / 100 * subTotal;

    return (
        <div>
            
        </div>
    )
}
