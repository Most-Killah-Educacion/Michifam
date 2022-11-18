import React from 'react'
import { Link } from 'react-router-dom'
// import Button from '../../../components/Button'
import img1 from '../../../assets/static/04.png'
import img2 from '../../../assets/static/01.png'
import img3 from '../../../assets/static/02.png'
import img4 from '../../../assets/static/03.png'

import ico1 from '../../../assets/static/bt-01.svg'
import ico2 from '../../../assets/static/bt-02.svg'
import ico3 from '../../../assets/static/bt-03.svg'
import ico4 from '../../../assets/static/bt-04.svg'

import './styles.scss'

const Products = props => {
  return (
    <>
      <div className="about__box" id="productos">
        <div className="about__box__container">
          <div className="about__card">
            <img src={ico1} alt="" className="about__icon" />
            <div className="about__text">
              <div className="about__title">EFICIENCIA</div>
              Concentramos en una sola plataforma las necesidades de productos
              de limpieza e higiene.
            </div>
          </div>
          <div className="about__card">
            <img src={ico2} alt="" className="about__icon" />
            <div className="about__text">
              <div className="about__title">CÓMODO</div>
              Puede realizar sus pedidos cómodamente desde nuestra tienda
              online o correo electrónico.
            </div>
          </div>
          <div className="about__card">
            <img src={ico3} alt="" className="about__icon" />
            <div className="about__text">
              <div className="about__title">RÁPIDO</div>
              Se lo enviamos a todo México en 24 o 48 hrs y gratis para pedidos
              superiores a $00.00 (IVA INCLUIDO).
            </div>
          </div>
          <div className="about__card">
            <img src={ico4} alt="" className="about__icon" />
            <div className="about__text">
              <div className="about__title">ATENCIÓN AL CLIENTE</div>
              Estamos disponibles 24 hrs por teléfono, chat online o correo
              electrónico. +52 55 2109 2018
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="products__container">
          <div className="products__title">
            Productos <span>Destacados</span>
          </div>
          <div className="products__box">
            {/*   {products.slice(0, 3).map(product => {
              return (
                <div className="products__card" key={product.id}>
                  <img
                    className="products__image"
                    src={`${process.env.REACT_APP_API}docs/products/${product.image}`}
                    alt="Producto"
                  />
                  <Link to={`/details/${product.id}`}>
                  <p className="products__text">{product.name}</p>
                  </Link>
                </div>
              )
            })} */}
            <div className="products__card">
              <img className="products__image" src={img1} alt="Producto" />
              <Link to={`/`}>
                <p className="products__text">
                  Michi Jabón de Manos Original 250ml
                  <span>Dermatológicamente testado</span>
                </p>
              </Link>
            </div>
            <div className="products__card">
              <img className="products__image" src={img3} alt="Producto" />
              <Link to={`/`}>
                <p className="products__text">
                  Michi Jabón de Manos Original 250ml
                  <span>Dermatológicamente testado</span>
                </p>
              </Link>
            </div>
            <div className="products__card">
              <img className="products__image" src={img4} alt="Producto" />
              <Link to={`/`}>
                <p className="products__text">
                  Michi Jabón de Manos Original 250ml
                  <span>Dermatológicamente testado</span>
                </p>
              </Link>
            </div>
            <div className="products__card">
              <img className="products__image" src={img2} alt="Producto" />
              <Link to={`/`}>
                <p className="products__text">
                  Michi Jabón de Manos Original 250ml
                  <span>Dermatológicamente testado</span>
                </p>
              </Link>
            </div>
          </div>
          {/*   <Link to="/products">
            <Button>Ver más</Button>
          </Link> */}
        </div>
      </div>
    </>
  )
}

export default Products
