import React, { Component } from 'react'

import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPick'

import landingPage from 'json/landingPage.json'

export default class LandingPage extends Component {
    render() {
        return (
            <>
            <Header {...this.props}></Header>
            <Hero data={landingPage.hero}></Hero>
            <MostPicked data={landingPage.MostPicked}></MostPicked>
            </>
        )
    }
}

