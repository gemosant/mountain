import React from 'react'
import "./Women.scss"
import WomenNewArrivals from "../WomenNewArrivals/WomenNewArrivals"
import WomenExploreMore from "../WomenExploreMore/WomenExploreMore"


const Women = () => {
    return (
              <>
                <div className="slider-wrapper">
                    <img src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw861590c8/S22/S22-Spring-New-Arrivals/21SS-Spring-NewArrivals-Womens-InsetHero-B1-BG-2x.jpg?sw=1600&sfrm=jpg&q=100" alt=""/>
                    <div className="slider-content">
                        <h1>Women's <br/> New Arrivals</h1>
                        <p>Sleet, rain, snow and or shine. Handle spring’s mood swings with waterproof outerwear and breathable layers.</p>
                        <div className="slider-wrapper-buttons">
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <WomenNewArrivals />
                <WomenExploreMore />
               
        </>
            
     
    )
}

export default Women;
