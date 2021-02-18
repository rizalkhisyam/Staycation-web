import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPick'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'
import Footer from 'parts/Footer'

// import landingPage from 'json/landingPage.json'

import { fetchPage } from 'store/actions/page'

class LandingPage extends Component {

    componentDidMount(){
        window.title = "Staycation | Home";
        window.scrollTo(0, 0);

        if(!this.props.page.landingPage){
            this.props.fetchPage(
                `/landing-page`,
                'landingPage'
                )
        }
    }

    constructor(props){
        super(props);
        this.refMostPicked = React.createRef();
    }
    render() {

        const { page } = this.props

        console.log(page);

        if(!page.hasOwnProperty('landingPage')) return null;

        return (
            <>
            <Header {...this.props}></Header>
            <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero}></Hero>
            <MostPicked refMostPicked={this.refMostPicked} data={page.landingPage.mostPick}></MostPicked>
            <Categories data={page.landingPage.category}/>
            <Testimony data={page.landingPage.testimonial}></Testimony>
            <Footer></Footer>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page,
});

export default connect(mapStateToProps, {fetchPage})(LandingPage)
