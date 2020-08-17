import React, { Component } from 'react'

import Fade from 'react-reveal/Fade'
import Zoom from 'react-reveal/Zoom'

import Header from 'parts/Header';
import PageDetailTitle from 'parts/PageDetailTitle'
import FeaturedImage from 'parts/FeaturedImage'
import PageDetailDescription from 'parts/PageDetailDescription';
import BookingForm from 'parts/BookingForm';
import Category from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

import ItemDetails from 'json/itemDetails.json';

export default class DetailsPage extends Component {

    componentDidMount(){
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }

    render() {

        const breadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref: ""}
        ];

        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle
                breadcrumb={breadcrumb}
                data={ItemDetails}
                >
                </PageDetailTitle>
                <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
                <section className="container">
                <div className="row">
                    <Fade left delay={300}>
                    <div className="col-7 pr-5">
                        <PageDetailDescription data={ItemDetails}></PageDetailDescription>
                    </div>
                    </Fade>
                    <Zoom delay={300}>
                    <div className="col-5">
                        <BookingForm itemDetails={ItemDetails}></BookingForm>
                    </div>
                    </Zoom>
                </div>
                </section>

                <Category data={ItemDetails.categories}></Category>
                <Testimony data={ItemDetails.testimonial}></Testimony>
                <Footer></Footer>
            </>
        )
    }
}
