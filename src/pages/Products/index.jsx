import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAll } from '../../actions'
import Button from '../../components/Button'

import './styles.scss'

const Products = props => {
  const { products, categories } = props
  const [filter, setFilter] = useState(0)

  useEffect(() => {
    props
      .getAll('products', 'GET_PRODUCTS')
      .then(() => props.getAll('categories', 'GET_CATEGORIES'))
    // eslint-disable-next-line
  }, [])

  if (products && categories) {
    let data = []

    if (filter === 0) {
      data = products
    } else {
      data = products.filter(product => product.cname === filter)
    }

    return (
      <div className="home">
        <div className="productsPage">
          <div className="productsPage__container">
            <div className="productsPage__title">Productos</div>
            <div className="productsPage__categories">
              <Button onClick={() => setFilter(0)}>Todos</Button>
              {categories
                ? categories.map(category => (
                    <Button onClick={() => setFilter(category.name)}>
                      {category.name}
                    </Button>
                  ))
                : null}
            </div>
            <div className="productsPage__box">
              {data.map(product => {
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
    categories: state.reducersProducts.categories,
  }
}

const mapDispatchToProps = {
  getAll,
}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
