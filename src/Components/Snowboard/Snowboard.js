import React from 'react'
import "./Snowboard.scss"
import SnowboardExplore from "../SnowboardExplore/SnowboardExplore"
import SnowboardHeroMedia from "../SnowboardHeroMedia/SnowboardHeroMedia"

const Snowboard = () => {
    return (
              <>
                <div className="slider-wrapper">
                    <img src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw49c5a6ae/FW21/W21-Family-Tree/21W-FamilyTree-InsetHero-BG.jpg?sw=1600&sfrm=jpg&q=100" alt=""/>
                    <div className="slider-content">
                        <h5>Family Tree Snowboard</h5>
                        <h1>Free Your Mind</h1>
                        <p>Make the most of every powder day with gender-neutral shapes and sizes built to conquer any terrain.</p>
                        <div className="slider-wrapper-buttons">
                            <button>SHOP NOW</button>
                            <button>EXPLORE FAMILY TREE</button>
                        </div>
                    </div>
                </div>
               <SnowboardExplore />
               <SnowboardHeroMedia/>
        </>
            
     
    )
}

export default Snowboard
