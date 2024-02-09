import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Signin = () => {
    const [input,setInput]=new useState(
        
        {
            "email":"",
            "password":""
    
        }
        )
const inputHandler=(event)=>{
    setInput({...input,[event.target.name]:event.target.value})
}
const readValues=()=>{
    console.log(input)
    axios.post("http://localhost:3000/api/user/signin",input).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("Sucessfully added")
                setInput(
                    {
                        "email":"",
                        "password":""
                    }
                )
            } else {
                alert("Something went wrong")
            }
        }
    )
}
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                        </div>
                        
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signin