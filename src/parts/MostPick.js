import React from 'react'
import propTypes from 'prop-types'


export default function MostPick(props) {
    return (
        <section className="container">
            <h4 className="mb-3">
                Most Picked
            </h4>
            <div className="container-grid">
                <div className="item column-4 row-2">
                    <div className="card"> card 1</div>
                </div>

                <div className="item column-4 row-1">
                    <div className="card"> card 2</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card"> card 2</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card"> card 2</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card"> card 2</div>
                </div>
            </div>
        </section>
    )
}
