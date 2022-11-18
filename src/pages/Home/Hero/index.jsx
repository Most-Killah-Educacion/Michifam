import React from 'react'
import bg from '../../../assets/static/image02.png'
import './styles.scss'

const Hero = () => {
  return (
    <>
      <div className="hero" id="nosotros">
        <div className="hero__box">
          <div className="hero__title">Nosotros</div>
          <div className="hero__paragraph">
            Productos de limpieza e higiene para su empresa, oficina y hogar.
            Cómodamente desde el ordenador o el móvil.
          </div>
          <div className="hero__paragraph">
            Nuestro portal web especializado en productos de limpieza y
            suministros profesionales e higiene para oficinas, empresas de
            limpieza, restauración, hostelería, comunidades, empresas en
            general, escuelas infantiles, guarderías, hoteles, hostales, etc
          </div>
          <div className="hero__paragraph">
            A través de nuestra tienda online puede comprar productos de
            limpieza e higiene de alta calidad y con alta garantía de compra.
          </div>
        </div>
        <div
          className="hero__img"
          style={{ backgroundImage: `url('${bg}')` }}
        ></div>
      </div>
    </>
  )
}

export default Hero
