import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function PageDetailDescription({ data }) {
    return (
        <main>
            <h4>About the place</h4>
            {ReactHtmlParser(data.description)}
            <div className="row" style={{marginTop: 30}}>
                {
                data.featureId.length === 0 ? "Tidak ada feature" :
                data.featureId.map((feature, index) => {
                    return (
                        <div
                        className="col-3"
                        key={`feature-${index}`}
                        style={{marginBottom: 20}}
                        >
                            <img width="38" src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`} alt={feature.name} className="d-block mb-2" />
                            
                            <span>
                                {feature.qty}
                            </span>
                            {" "}
                            <span className="font-weight-light text-gray-500">
                                {feature.name}
                            </span>
                        </div>
                    )
                })}
            </div>
        </main>
    )
}
