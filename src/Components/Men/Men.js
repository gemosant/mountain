import React from 'react'
import "./Men.scss"
import MenNewArrivals from "../MenNewArrivals/MenNewArrivals"
import MenExploreMore from "../MenExploreMore/MenExploreMore"

const Men = () => {
    return (
              <>
                <div className="slider-wrapper">
                    <img src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw687d44e0/S22/S22-Spring-New-Arrivals/21SS-Spring-NewArrivals-Mens-InsetHero-BG-2x.jpg?sw=1600&sfrm=jpg&q=100" alt=""/>
                    <div className="slider-content">
                        <h1>Men's <br/> New Arrivals</h1>
                        <p>Ditch the heavy layers and get ready for the changing seasons.</p>
                        <div className="slider-wrapper-buttons">
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <MenNewArrivals />
                <MenExploreMore />
        </>
    )
}

export default Men;
