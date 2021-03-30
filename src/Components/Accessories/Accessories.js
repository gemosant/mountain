import React from 'react'
import "./Accessories.scss"
// import MenExploreMore from "../MenExploreMore/MenExploreMore"
import AccessoriesNewArrivals from "../AccessoriesNewArrivals/AccessoriesNewArrivals"
import AccessoriesExploreMore from "../AccessoriesExploreMore/AccessoriesExploreMore"

const Accessories = () => {
    return (
              <>
                <div className="slider-wrapper">
                    <img src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwe64e4c78/S22/S22-Spring-New-Arrivals/21SS-Spring-NewArrivals-Agnostic-InsetHero-B1-BG-2x.jpg?sw=1600&sfrm=jpg&q=100" alt=""/>
                    <div className="slider-content">
                        <h1>New Arrivals</h1>
                        <p>Warm weather is just around the corner. Get ready for your next adventure with packable bags, backpacks, and accessories.</p>
                        <div className="slider-wrapper-buttons">
                            <button>SHOP NOW</button>
                        </div>
                    </div>
                </div>
                <AccessoriesNewArrivals />
                <AccessoriesExploreMore/>
        </>
    )
}

export default Accessories;
