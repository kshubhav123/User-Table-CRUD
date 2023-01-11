import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from "axios"


const initialData={
    name:"",
    email:"",
    mobile:"",
    city:""
}

const UpdateUser = () => {

    const { id } = useParams();
    const [values, setValue] = useState(initialData);

const {name,email,mobile,city}=values


    const handleChange = (e) => {
        setValue({ ...values, [e.target.name]: e.target.value });
    }

    const singleUser = async (user_id) => {
        return await axios.get(`${process.env.REACT_APP_API}/singleuser/${user_id}`);
    }

    useEffect(() => {
        singleUser(id).then((res) => {
            setValue({ ...values, ...res.data })
        })
    }, [id])

    const updateUser = async (userData) => {
        return await axios.put(`${process.env.REACT_APP_API}/update/${id}`, userData);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        let data = { name, email, mobile, city }
        console.log("1", data);
        updateUser(data).then((res) => {
            console.log("2", res.data);
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
                            <input type="name" name="name" value={name} onChange={handleChange} class="form-control" placeholder="Enter Name" required />
                        </div>
                        <div class="form-group">
                            <label className='my-2 mx-1'>Email</label>
                            <input type="email" name="email" class="form-control" value={email} onChange={handleChange} placeholder="Enter Email" required />
                        </div>
                        <div class="form-group">
                            <label className='my-2 mx-1'>Mobile No.</label>
                            <input type="number" name="mobile" class="form-control" value={mobile} onChange={handleChange} placeholder="Enter Mobile No." required />
                        </div>
                        <div class="form-group">
                            <label className='my-2 mx-1'>City</label>
                            <input type="text" name="city" class="form-control" value={city} onChange={handleChange} placeholder="Enter City" required />
                        </div>
                        <button type='submit' onClick={handleSubmit} class="btn btn-success mx-1 my-3">Update User</button>
                    </form>
                </div>
                <div className='col-md-4'></div>
            </div>

        </React.Fragment>
    )
}

export default UpdateUser