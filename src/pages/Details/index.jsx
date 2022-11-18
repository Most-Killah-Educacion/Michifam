import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getAll, get } from '../../actions'
import Button from '../../components/Button'

import './styles.scss'

const Details = props => {
  const { product, sizes, products } = props
  const { id } = useParams()
  const [size, setSize] = useState('0')

  useEffect(() => {
    props
      .get(`products/${id}`, 'GET_PRODUCT')
      .then(() => props.getAll(`sizes/${id}`, 'GET_SIZES'))
      .then(() => props.getAll(`products`, 'GET_PRODUCTS'))

    // eslint-disable-next-line
  }, [])

  if (product && products && sizes) {
    return (
      <div className="home">
        <div className="details">
          <div className="details__container">
            <img
              className="details__image"
              src={`${process.env.REACT_APP_API}docs/products/${product.image}`}
              alt="Producto"
            />
            <div className="details__product">
              <h1 className="details__title">{product.name}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: product.description }}
              ></div>
              <select
                className="details__options"
                name="size"
                onChange={e => setSize(e.target.value)}
              >
                <option value="0">Tamaño</option>
                {sizes.map(size => (
                  <option key={size.id} value={size.id}>
                    {size.name}
                  </option>
                ))}
              </select>
              {size !== '0' ? (
                <>
                  <h2 className="details__size">
                    {sizes.filter(s => s.id === parseInt(size))[0].name}
                  </h2>
                  <h3 className="details__price">
                    $
                    {parseFloat(
                      sizes.filter(s => s.id === parseInt(size))[0].price
                    ).toFixed(2)}
                  </h3>
                  <div className="details__button">
                    <Button>Agregar al Carrito</Button>
                    <Button>Comprar Ahora</Button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          <div className="productsPage__container">
            <div className="products__title">Productos Relacionados</div>
            <div className="productsPage__box">
              {products.slice(0, 3).map(product => {
                return (
                  <div className="productsPage__card" key={product.id}>
                    <img
                      className="productsPage__image"
                      src={`${process.env.REACT_APP_API}docs/products/${product.image}`}
                      alt="Producto"
                    />
                    <Link to={`/details/${product.id}`}>
                      <p className="productsPage__text">{product.name}</p>
                    </Link>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return <h1>Calgando</h1>
  }
}

const mapStateToProps = state => {
  return {
    products: state.reducersProducts.products,
    product: state.reducersProducts.product,
    categories: state.reducersProducts.categories,
    sizes: state.reducersProducts.sizes,
  }
}

const mapDispatchToProps = {
  getAll,
  get,
}

export default connect(mapStateToProps, mapDispatchToProps)(Details)
