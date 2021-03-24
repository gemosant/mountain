import React, { useEffect } from 'react';
import { getComponents } from '../../Redux/Actions/action';
import { connect } from 'react-redux';
import './exploreMore.scss';

const ExploreMore = props => {

    useEffect(() => {
        props.getComponents()
    }, [])

    return (
        <div className="explore-container">
            <h1>{props.bigTitle}</h1>
            <div className="explore-wrapper">
                {
                    props.components.map((card , i) => (
                        <>
                            <div className="explore-card" key={i}>
                                <img src={card.imgUrl} alt="" />
                                <div className="explore-card-content">
                                    <h1>{card.title}</h1>
                                    <p>{card.text}</p>
                                    <button>{card.button}</button>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        components: state.components
    }
}

export default connect(mapStateToProps, { getComponents })(ExploreMore);
