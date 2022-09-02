import './styles/sideBar.css'
import Navbar from './Navbar'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Image from '../../../backend/public/assets'
// import { imagez } from '../images'
// import * as ALL from '../images'

import 'bootstrap/dist/css/bootstrap.css';
import { useRoutes } from 'react-router-dom';
import { useNavigate, Redirect, Navigate } from 'react-router-dom'
import Productpage2 from './Productpage2';


function ItemsDetailsPage() {
  const [datares, setdatares] = useState([])

  useEffect(() => {
    const url = 'http://localhost:3000/images';
    axios.get(url).then(resp => {
      console.log('ITS all Here')
      console.log(resp.data)
      setdatares(resp.data.message)
      return datares
    })
      .catch(err => {
        console.log(err)
      })

  }, [])

  const routers = useNavigate();

  const linkToBid = (data) => {
    console.log(data);
    // <Productpage2 data={data} />
    // <Navigate to={'/productpage2'} state={{ data }} />
    routers("/productpage2", { state: data });

  }

  return (
    <div>
      <div><Navbar /></div>
      <p>Welcome to Bid Page</p>
      <div className='main'>
        <div className='container-fluid d-flex justify-content-center'>
          <div className='row'>

            {datares.map((data) => {
              return (
                <div className='col-md-4'>
                  <div className="card" >
                    <div className="overflow">
                      <img src={`/images/${data.image}`} alt="image1" className="card-img-top img" style={{ width: '100%', height: 'auto' }} />
                      <div className="card-body text-dark">
                        <h4 className="card-title">{data.name}</h4>
                        <p card-text text-secondary>grab yours</p>
                        <a onClick={() => linkToBid(data)} className="btn btn-primary">BID</a>
                      </div>

                    </div>
                  </div>
                </div>

              )
            })}

          </div>
        </div>

      </div>
    </div>
  )





  // return (
  //   <div className='main'>
  //     {/* <div><Navbar /></div> */}
  //     {/* <div className='sidebar'>
  //       <SidebarItem />
  //     </div> */}
  //     <div className='container'>
  //       <h1>My Cards</h1>
  //       <CardMany />
  //     </div>
  //   </div>
  // )
}

export default ItemsDetailsPage