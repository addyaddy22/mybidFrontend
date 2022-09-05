import React, { useState, useEffect } from 'react'
import './styles/ProductPage2.css'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';


const Productpage2 = (props) => {

    const [state, setState] = useState();
    let location = useLocation();

    useEffect(() => {
        console.log(location)
        if (location.state) {
            setState(location.state)

        }

    }, [location])


    const linkToUpdateBid = (data) => {
        console.log('data')
        console.log(data);
        const url = 'https://mybidbackend.herokuapp.com/bidding/create';
        axios.post(url, data).then(resp => {
            console.log('Data')
            console.log(resp.data)
        })
            .catch(err => {
                console.log(err)
            })


    }

    return (
        <React.Fragment>
            <div className='row'>
                <p><i>Enjoy Bidding with us Always!!</i></p>
                <div className='col'>
                    <div className="card">
                        <div className="overflow">
                            <img src={`/images/${state?.image}`} alt="image1" />
                        </div>
                        <div className="card-body text-dark">
                            <h4 className="card-title">{state?.name}</h4>
                            <p card-text text-secondary>{state?.description}</p>
                            <p card-text text-secondary><b>Last Bid Price: $ {state?.price}</b></p>
                        </div>
                    </div>
                </div>
                <div className='col'>
                    <div>
                        <h1>product Number : {state?.id}</h1>
                    </div>
                    <div>
                        <p>Maximum bid $: {state?.price}</p>
                    </div>
                    <div>
                        <h3>Details</h3>
                        <p>{state?.description}</p>
                    </div>
                    <div>
                        <h4>Last Bid made: $ {state?.price}</h4><h6>Available until: </h6>
                    </div>
                    <div>
                        <div>
                            <button onClick={() => linkToUpdateBid(state)} href=" " className="btn btn-primary">Place a BID</button>
                        </div>


                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Activate Auto Bidding</label>
                        </div>

                    </div>
                </div>



            </div>
        </React.Fragment>
    )

};
export default Productpage2