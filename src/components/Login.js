import React, { Component } from 'react'
import { useState } from 'react'
import './loginStyle.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import { useNavigate, Redirect, Navigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

function Form() {

    const navigate = useNavigate();

    const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const Login = (e) => {
        e.preventDefault();
        let request = {
            email: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
        axios.post('http://localhost:3000/login', request).then(resp => {
            alert(resp.data.message)
            console.log(resp.data.message)
            if (resp.data.message === 'Successful') {
                localStorage.setItem("authenticated", true);
                console.log(localStorage);
                console.log('Working')
                axios.get('http://localhost:3000/images', { mode: 'no-cors' }).then(resp => {
                    console.log(resp.data.message)
                    navigate("/landingpage", { props: resp.data.message });

                }).catch(err => {
                    console.log(err)
                })

            }
            else if (resp.data.message === 'Success') {
                localStorage.setItem("authenticated", true);
                console.log(localStorage);
                console.log('Working')
                axios.get('http://localhost:3000/images', { mode: 'no-cors' }).then(resp => {
                    console.log(resp.data.message)
                    navigate("/adminhome", { props: resp.data.message });

                }).catch(err => {
                    console.log(err)
                })
            }

        }).catch(err => {
            console.log(err)
        })
    }


    return (

        <div className="main">
            <div className="sub-main">
                <div className='container-fluid'>
                    <div className="imgs">
                        <div className="container-image">
                            {/* <img src={require('./../images/a.png').default} alt='' className="profile" /> */}
                        </div>
                    </div>
                    <form onSubmit={(e) => Login(e)}>

                        <h1>Log in Page</h1>
                        <div>
                            {/* <img src={require('./images/email.jpg').default} alt='' className="email"/> */}
                            <input id="username" type="text" placeholder="username" className="name" onChange={(event) => { setUsername(event.target.value) }} />
                        </div>
                        <div>
                            {/* <img src={require('./images/pass.pnp').default} alt="pass" className="password"/> */}
                            <input id="password" type="password" placeholder="password" className="name" onChange={(event) => { setPassword(event.target.value) }} />
                        </div>
                        <div className="login-button">
                            <button type="submit" className='btn btn-primary'>Log In</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )
};

export default Form




