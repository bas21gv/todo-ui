import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginTodo, saveLoggedInUser, storeToken } from '../services/AuthService'

const LoginComponent = () => {

    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')

    const navigator = useNavigate()

    async function loginUser(e) {
        e.preventDefault()

        const loginObj = {username, password}

        await loginTodo(loginObj).then((response)=>{
            console.log(response.data)

            const token = 'Bearer ' + response.data.accessToken

            const role = response.data.role

            // const token = 'Basic ' + window.btoa(loginObj.username+':'+loginObj.password)
            storeToken(token)
            saveLoggedInUser(username, role)
            navigator('/todos')
            window.location.reload(false)
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
                        <h2 className='text-center'>User Login</h2>
                    </div>
                    <div className='card-body'>
                        <form>
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
                                <button className='btn btn-primary' onClick={(e)=>loginUser(e)}>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginComponent