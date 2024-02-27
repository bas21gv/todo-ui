import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerTodo } from '../services/AuthService'

const RegisterComponent = () => {

    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    const navigator = useNavigate()

    function registerUser(e) {
        e.preventDefault()

        const user = {name, username, password, email}
        registerTodo(user).then((response)=>{
            console.log(response.data)
            navigator('/login')
        }).catch(error=>{
            console.error(error)
        })
    }

  return (
    <div className='container'>
        <br/><br/>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card'>
                    <div className='card-header'>
                        <h2 className='text-center'>Register User</h2>
                    </div>
                    <div className='card-body'>
                        <form>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Name:</label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='name'
                                        value={name}
                                        className='form-control'
                                        onChange={(e)=>setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Username:</label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='username'
                                        value={username}
                                        className='form-control'
                                        onChange={(e)=>setUsername(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Email:</label>
                                <div className='col-md-9'>
                                    <input
                                        type='text'
                                        name='email'
                                        value={email}
                                        className='form-control'
                                        onChange={(e)=>setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='row mb-3'>
                                <label className='col-md-3 control-label'>Password:</label>
                                <div className='col-md-9'>
                                    <input
                                        type='password'
                                        name='password'
                                        value={password}
                                        className='form-control'
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className='form-group mb-3'>
                                <button className='btn btn-primary' onClick={(e)=>registerUser(e)}>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RegisterComponent