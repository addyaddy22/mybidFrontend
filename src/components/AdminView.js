import React, { useState, useEffect } from 'react'
import Productcard from './Productcard'
import ProductSideItems from './ProductSideItems'
// import './styles/ProductPage2.css'
import Navbar from './Navbar'
import AdminHome from './AdminHome'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'

const AdminView = (props) => {

    const [state, setState] = useState();
    let location = useLocation();

    useEffect(() => {
        console.log(location)
        if (location.state) {
            setState(location.state)

        }

    }, [location])


    const adminview = (data) => {
        console.log('data')
        console.log(data);
        // const url = 'http://localhost:3000/bidding/create';
        // axios.post(url, data).then(resp => {
        //     console.log('Data')
        //     console.log(resp.data)
        // })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    return (
        <React.Fragment>
            <div className='row'>
                <div className="card">
                    <div className="overflow">
                        <img src={`/images/${state?.image}`} alt="image1" className="card-img-top " />
                    </div>
                    <div className="card-body text-dark">
                        <h4 className="card-title">{state?.name}</h4>
                        <p card-text text-secondary>{state?.description}</p>
                        <p card-text text-secondary>{state?.price}</p>
                        <button className="btn btn-primary">EDIT</button>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )

};
export default AdminView