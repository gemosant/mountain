import React, { useEffect } from "react";
import { connect } from "react-redux";
import "../ProductCart/ProductCard.scss";
import { getProducts } from "../../Redux/Actions/action";

const BagList = (props) => {
  useEffect(() => {
    props.getProducts();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-3">Filters</div>
        <div className="col-md-9">
          {props.products
            .filter((product) => product.categories === "Bag")
            .map((product) => (
              <section id="contenerdo-tarjetas">
                <div id="tarjeta-der" className="tarjeta">
                  <div id="cont-imagen-der" className="contenedor-img">
                    <img src={product.imgUrl} alt="boot" />
                  </div>
                  <div className="texto-tarjeta">
                    <p>
                      <h2>{product.name}</h2>
                    </p>
                    <p className="precio">${product.price}</p>
                  </div>
                </div>
              </section>
            ))}
             
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, { getProducts })(BagList);
