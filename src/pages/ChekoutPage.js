import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

import { connect } from 'react-redux';

import Header from 'parts/Header'
import Button from 'elements/Button'

import Stepper, { Controller, MainContent, Meta, Numbering } from 'elements/Stepper';

import BookingInformation from 'parts/Checkout/BookingInformation';
import Payment from 'parts/Checkout/Payment';
import Completed from 'parts/Checkout/Completed';

// import ItemDetails from 'json/itemDetails.json';

import { submitBooking } from 'store/actions/checkout';

class CheckoutPage extends Component {

    state = {
        data: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            proofPayment: "",
            bankName: "",
            bankHolder: ""
        }
    }

    onChange = (event) => {
        this.setState({
            data: {
            ...this.state.data,
            [event.target.name]: event.target.value,
            },
        });
    };

    componentDidMount(){
        window.scrollTo(0, 0);
    };

    _Submit = (nextStep) => {
        const { data } = this.state
        const { checkout } = this.props
        const payload = new FormData()

        payload.append("firstName", data.firstName);
        payload.append("lastName", data.lastName);
        payload.append("email", data.email);
        payload.append("phoneNumber", data.phone);
        payload.append("itemId", checkout._id);
        payload.append("duration", checkout.duration);
        payload.append("bookingStartDate", checkout.date.startDate);
        payload.append("bookingEndDate", checkout.date.endDate);
        payload.append("accountHolder", data.bankHolder);
        payload.append("bankFrom", data.bankName);
        payload.append("image", data.proofPayment[0]);

        this.props.submitBooking(payload).then(()=> {
            nextStep();
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {

        const { data } = this.state;
        const { checkout, page } = this.props

        if (!checkout) return <div className="container">
            <div className="row align-items-center justify-content-center text-center"
            style={{ height: "100vh" }}
            >
                <div className="col-3">
                    Anda Belum Memesan

                    <div>
                        <Button className="btn mt-5" type="button" 
                        onClick = {() => this.props.history.goBack()} 
                        isLight>
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </div>

        // const checkout = {
        //     duration: 3
        // }

        const steps = {
            bookingInformation: {
                title: "Booking Information",
                description: "Please fill up the blank fields bellow",
                content: (
                    <BookingInformation
                    data={data}
                    checkout={checkout}
                    ItemDetails={page[checkout._id]}
                    onChange={this.onChange}
                    />
                )
            },
            payment: {
                title: "Payment",
                description: "Kindly follow the instruction bellow",
                content: (
                    <Payment 
                    data={data}
                    checkout={checkout}
                    ItemDetails={page[checkout._id]}
                    onChange={this.onChange}
                    />
                )
            },
            completed: {
                title: "Yay! Completed",
                description: null,
                content: (
                    <Completed/>
                )
            }
        }

        return (
            <>
            <Header isCentered>
            </Header>
            <Stepper steps={steps}>
                {
                    (prevStep, nextStep, currentStep, steps) => (
                        <>
                            <Numbering 
                            data={steps}
                            current={currentStep}
                            style={{marginBottom: 50}}
                            />

                            <Meta 
                            data={steps}
                            current={currentStep}
                            />

                            <MainContent 
                            data={steps}
                            current={currentStep}
                            />

                            {currentStep === 'bookingInformation' &&  (
                                <Controller>
                                    { data.firstName !== "" &&
                                    data.lastName !== "" &&
                                    data.email !== "" &&
                                    data.phone !== "" && (
                                        <Fade>
                                            <Button
                                            className="btn mb-3"
                                            type="button"
                                            isBlock
                                            isPrimary
                                            hasShadow
                                            onClick={nextStep}
                                            >
                                                Continue to Book
                                            </Button>
                                        </Fade>
                                    )}
                                    <Button
                                    className="btn"
                                    type="link"
                                    isBlock
                                    isLight
                                    href={`/properties/${checkout._id}`}
                                    >
                                        Cancel
                                    </Button>
                                </Controller>
                            )}

                            {currentStep === 'payment' && (
                                <Controller>
                                { data.proofPayment !== "" &&
                                data.bankName !== "" &&
                                data.bankHolder !== "" &&(
                                    <Fade>
                                        <Button
                                        className="btn mb-3"
                                        type="button"
                                        isBlock
                                        isPrimary
                                        hasShadow
                                        onClick={() => this._Submit(nextStep)}
                                        >
                                            Continue to Book
                                        </Button>
                                    </Fade>
                                )}
                                <Button
                                className="btn"
                                type="button"
                                isBlock
                                isLight
                                onClick={prevStep}
                                >
                                    Cancel
                                </Button>
                            </Controller>
                            )}

                            {currentStep === 'completed' && (
                                <Controller>
                                    <Button
                                    className="btn"
                                    type="link"
                                    isBlock
                                    isPrimary
                                    hasShadow
                                    href=""
                                    >
                                        Back to Home
                                    </Button>
                                </Controller>
                            )}
                        </>
                    )
                }
            </Stepper>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    checkout: state.checkout,
    page: state.page
})

export default connect(mapStateToProps, {submitBooking})(CheckoutPage);