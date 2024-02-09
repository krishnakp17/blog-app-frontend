import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const PostAdd = () => {
    const [input, setInput] = new useState(

        {
            "userId": "",
            "post": ""

        }
    )
    const inputHandler = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value })
    }
    const readValues = () => {
        console.log(input)
        axios.post("http://localhost:3000/api/post/post", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Sucessfully added")
                    setInput(
                        {
                            "userId": "",
                            "post": ""
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
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">user id</label>
                                <input type="text" className="form-control" name='userId' value={input.userId} onChange={inputHandler} />
                            </div>
                            <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">Post</label>
                                <input type="text" className="form-control" name='post' value={input.post} onChange={inputHandler} />
                            </div>
                            
                            <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValues}>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostAdd