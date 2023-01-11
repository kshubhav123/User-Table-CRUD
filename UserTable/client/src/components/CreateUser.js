import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const CreateUser = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [city, setCity] = useState();

    const createUser = async (userData) => {
        return await axios.post(`${process.env.REACT_APP_API}/create`, userData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {name, email, mobile, city}
        console.log("1",data);
        createUser(data).then((res) => {
            console.log("2",res.data);
        })
    }

    return (
        <React.Fragment>
            <br /><br /><br /><br />
            <div className='row'>
                <div className='col-md-4'></div>
                <div className='col-md'>
                    <div className='d-flex justify-content-between py-3'>
                        <div className='fs-4'> User Table </div>
                        <Link to="/" className='btn btn-outline-secondary'>  User List</Link>
                    </div>
                    <form>
                        <div class="form-group">
                            <label className='mb-2 mx-1'>Name</label>
                            <input type="name" name="name" value={name} onChange={(e) => setName(e.target.value)} class="form-control" placeholder="Enter Name" required />
                        </div>
                        <div class="form-group">
                            <label className='my-2 mx-1'>Email</label>
                            <input type="email" name="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required />
                        </div>
                        <div class="form-group">
                            <label className='my-2 mx-1'>Mobile No.</label>
                            <input type="number" name="mobile" class="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Enter Mobile No." required />
                        </div>
                        <div class="form-group">
                            <label className='my-2 mx-1'>City</label>
                            <input type="text" name="city" class="form-control" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" required />
                        </div>
                        <button type='submit' onClick={handleSubmit} class="btn btn-primary mx-1 my-3">Create User</button>
                    </form>
                </div>
                <div className='col-md-4'></div>
            </div>



        </React.Fragment>
    )
}

export default CreateUser