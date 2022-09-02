import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Image from '../../../backend/public/assets'
import Cards from './Cards';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate, Redirect, Navigate } from 'react-router-dom'




const AdminHome = (props) => {
    const [datares, setdatares] = useState([])
    let i = 0
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

    const view = (data) => {
        console.log(data);
        // <Productpage2 data={data} />
        // <Navigate to={'/productpage2'} state={{ data }} />
        routers("/adminview", { state: data });
    }

    return (
        <div className='main'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image Item</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {datares.map((data) => {
                        return (

                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>
                                    <img src={`/images/${data?.image}`} alt="image1" className="card-img-top " style={{ width: '50px', height: '50px' }} />
                                </td>
                                <td>{data.price}</td>
                                <td>{data.description}</td>
                                <td>
                                    <button type="button" class="btn btn-primary" onClick={() => view(data)}>View<i class="far fa-eye" style={{ height: '50px', width: '50px' }}></i></button>
                                    <button type="button" class="btn btn-success">Edit<i class="fas fa-edit"></i></button>
                                    <button type="button" class="btn btn-danger">Delete<i class="far fa-trash-alt"></i></button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>


        </div>
    )

};

export default AdminHome