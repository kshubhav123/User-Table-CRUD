import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const ListUser = () => {
    const [data, setdata] = useState([]);
    const userList = async () => {
        return await axios.get(`${process.env.REACT_APP_API}/userlist`);
    }




    const handleDelete =async (id) => {
        console.log(id);
        let confirmation = window.confirm("Delete or Not");
        if (confirmation)
           await axios.delete(`${process.env.REACT_APP_API}/remove/${id}`).then((res) => {
                console.log(res);
                userList();
            }).catch((err) => {
                console.log(err);
            })
    }

    useEffect(() => {
        userList().then((res) => {
            setdata(res.data)
        })
    }, []);

    return (
        <React.Fragment>
            <br /><br /><br /><br />
            <div className='row'>
                <div className='col-md-3'></div>
                <div className='col-md'>
                    <div className='d-flex justify-content-between py-3'>
                        <div className='fs-4'> User Table </div>
                        <Link to="/createuser" className='btn btn-outline-danger'> Add User</Link>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Phone</th>
                                <th scope="col">City</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((users, index) => {
                                    return (
                                        <tr key={index}>
                                            <th scope="row"> {index + 1}</th>
                                            <td>{users.name}</td>
                                            <td>{users.email}</td>
                                            <td>{users.mobile}</td>
                                            <td>{users.city}</td>
                                            <td>
                                                <div className='d-flex'>
                                                    <Link to={`/updateuser/${users._id}`} className='text-decoration-none me-2 btn btn-outline-success'> Edit </Link>
                                                    <button onClick={() => handleDelete(users._id)} className='btn-outline-danger btn'>Delete</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
                <div className='col-md-3'></div>
            </div>



        </React.Fragment>
    )
}

export default ListUser