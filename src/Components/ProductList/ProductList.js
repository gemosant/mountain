import React from 'react'

import ProductCard from '../ProductCart/ProductCard'

const ProductList = (props) => {
    return (
        <>
        <div className="row">
        <div className="col-md-3">Filters</div>
        <div className="col-md-9">
             <ProductCard/>
        </div>
      </div>
      </>
    )
}



export default ProductList
