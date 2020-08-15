import React from 'react'
import Fade from 'react-reveal/Fade';
import CompleteIllustration from 'assets/images/completed.jpg'

export default function Completed() {
    return (
        <Fade>
        <div className="container" style={{marginBottom: 30}}>
            <div className="row justify-content-center text-center">
                <div className="col-4">
                    <img className="img-fluid" src={CompleteIllustration} alt="completed checkout apartment"/>
                    <p className="text-gray-900">
                        We will inform you via email later once the transaction has been accepted
                    </p>
                </div>
            </div>
        </div>
        </Fade>
    )
}
