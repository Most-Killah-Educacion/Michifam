import React from 'react'
import './styles.scss'
import Header from '../containers/Header'
import Navbar from '../containers/Navbar'
import Footer from '../containers/Footer'
import Whatsapp from '../components/Whatsapp'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
      <Whatsapp />
    </>
  )
}

export default Layout
