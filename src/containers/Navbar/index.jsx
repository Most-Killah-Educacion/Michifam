import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// import { IoCartOutline } from 'react-icons/io5'
import logo from '../../assets/static/logo.svg'
import { HashLink } from 'react-router-hash-link'
import './styles.scss'
const Navbar = () => {
  const [togleBar, setTogle] = useState('')

  const toggleAction = () => {
    setTogle(togleBar === '' ? 'active' : '')
  }

  return (
    <nav>
      <div className="nav">
        <Link to="/" className="nav__brand">
          <img src={logo} className="nav__logo" alt="" />
        </Link>
        <div className="nav__menuMovil" onClick={toggleAction}>
          <AiOutlineMenu />
        </div>
        <ul className={`nav__menu ${togleBar}`}>
          <li className="nav__item" onClick={toggleAction}>
            <AiOutlineClose />
          </li>
          <li className="nav__item">
            <HashLink className="nav__link" smooth to="/#inicio">
              Inicio
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink className="nav__link" smooth to="/#productos">
              Productos
            </HashLink>
          </li>

          <li className="nav__item">
            <HashLink className="nav__link" smooth to="/#nosotros">
              Nosotros
            </HashLink>
          </li>
          <li className="nav__item">
            <HashLink className="nav__link" smooth to="/#contact">
              Contacto
            </HashLink>
          </li>
          {/*    <li className="nav__item">
            <Link to="/" className="nav__link">
              Preguntas frecuentes
            </Link>
          </li> */}
          {/* <li className="nav__item">
            <Link to="/cart" className="nav__link">
              <IoCartOutline />
            </Link>
          </li> */}
          {/*  <li className="nav__button">
            <a href={process.env.REACT_APP_DASHBOARD}>Iniciar Sesión</a>
          </li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
