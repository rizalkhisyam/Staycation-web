import React from 'react'
import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom';

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconTraveler from 'assets/images/icons/ic-traveler.svg'
import IconCities from 'assets/images/icons/ic-cities.svg'
import IconTreasure from 'assets/images/icons/ic-treasure.svg'

import Button from 'elements/Button'

import formatNumber from 'utils/FormatNumber'

export default function Hero(props) {

    function showMostPicked(){
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className="container pt-4">
            <div className="row align-item-center">
                <Fade left>
                <div className="col-auto pr-5" style={{ width: 520 }}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Forget Busy Work, <br/>
                        Start Next Vacation
                    </h1>

                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight:'170%'}}>
                        We provide what you need to enjoy your 
                        holiday with family. Time to make another 
                        memorable moments.
                    </p>

                    <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>

                    <div className="row" style={{marginTop: 70}}>
                        <div className="col-auto">
                            <img src={IconTraveler} style={{width:36, height:36, marginRight: 60}} alt={`${props.data.travelers} Travelers`}></img>
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)} <span className="text-gray-500 font-weight-light">travelers</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img src={IconTreasure} style={{width:36, height:36, marginRight: 60}} alt={`${props.data.treasure} Treasure`}></img>
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasure)} <span className="text-gray-500 font-weight-light">treasures</span>
                            </h6>
                        </div>
                        <div className="col-auto">
                            <img src={IconCities} style={{width:36, height:36, marginRight: 60}} alt={`${props.data.cities} Cities`}></img>
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)} <span className="text-gray-500 font-weight-light">cities</span>
                            </h6>
                        </div>
                        
                    </div>
                </div>
                </Fade>
                <Zoom>
                <div className="col-6 pl-5">
                    <div className="image-hero" style={{width: 520, height: 410}}>
                        <img src={ImageHero} alt="room with couches" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px' , zIndex: 1}} />

                        <img src={ImageHero_} alt="room with couches frame" className="img-fluid position-absolute" style={{margin: '0 -15px -15px 0'}} />
                    </div>
                </div>
                </Zoom>
            </div>
        </section>
    )
}
