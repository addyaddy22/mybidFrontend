import React from "react";
// import bed from '../images/bids/bed1.jpeg'
import './styles/side2.css'

const Cards = props => {
    return (
        <div className="card">
            <div className="overflow">
                {/* <img src={bed} alt="image1" className="card-img-top" /> */}
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">Card Tittle</h4>
                <p card-text text-secondary>grab yours</p>
                <a href="/productpage2" className="btn btn-primary">BID</a>
            </div>
        </div>

    )
}

export default Cards