import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { isUserLogged, logout } from '../services/AuthService'

const HeaderComponent = () => {

  const isAuth = isUserLogged()

  const navigator = useNavigate();

  function handleLogout() {
    logout()
    navigator('/login')
  }
  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
              <div>
                <a className='navbar-brand' href='#'>Todo Management</a>
              </div>
              <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                  {
                    isAuth &&
                    <li className='nav-item'>
                      <NavLink to='/todos' className='nav-link'>Todos</NavLink>
                    </li>
                  }
                </ul>
              </div>
              <ul className='navbar-nav'>
                {
                  !isAuth &&
                  <li className='nav-item'>
                    <NavLink to='/register' className='nav-link'>Register</NavLink>
                  </li>
                }
                {
                  !isAuth &&
                  <li className='nav-item'>
                    <NavLink to='/login' className='nav-link'>Login</NavLink>
                  </li>
                } 
                {
                  isAuth &&
                  <li className='nav-item'>
                    <NavLink to='/login' className='nav-link' onClick={handleLogout}>Logout</NavLink>
                  </li>
                }
              </ul>  
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent