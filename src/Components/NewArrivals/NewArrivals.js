import React, {useEffect} from 'react'
import Slider from "react-slick";
import './newArrivals.scss';
import {getProducts} from '../../Redux/Actions/action';
import { connect } from 'react-redux';


const NewArrivals = props => {

    
    useEffect(() => {
        props.getProducts()
    }, [])

    let settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1,
                    centerMode:false
                }
            }
        ]
    };

    return (
        <div className="new-arrivals-container">
            <h1>{props.title}</h1>
            <Slider {...settings}>
                {props.products.map(product => (
                    <div className="new-arrivals-products">
                        <div className="new-arrivals-image-wrapper">
                            <img src={product.imgUrl} alt="" />
                            <h6>NEW</h6>
                        </div>
                        <h4>{product.name}</h4>
                        <h4>${product.price}</h4>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

    const mapStateToProps = state => {
        return {
            products: state.products
        }
    }


export default connect(mapStateToProps, {getProducts})(NewArrivals)
