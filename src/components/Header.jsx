import React from 'react'
import "./Header.css"
import Cart from './Cart'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/auth-slice'

const Header = () => {
  const dispatch = useDispatch();

  const logoutHandler = () =>{
    dispatch(authActions.logout())
  }
  return (
  <header>
    <nav className='header-nav'>
        <ul className='header-ul'>
            <li>
             <h2 className='header-h2'>Redux Shopping App</h2>
            </li>
            <li><Cart /></li>
            <li>
              <button onClick={logoutHandler} className='logout-btn'>Logout</button>
            </li>
        </ul>
    </nav>
  </header>
  )
}

export default Header