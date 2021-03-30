import React from "react";
import "./MenExploreMore.scss";

const MenExploreMore = () => {
  return (
    <>
      <div className="explore-container">
        <div className="explore-wrapper">
          <div className="explore-card">
            <img
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw03bc4682/FW21/W21-Mens-Shop-Landing-Page/ClemensMillauer_KaunertalAT_StepOn_SaniAlibabic_3865.jpg?sw=1600&sfrm=jpg&q=100"
              alt=""
            />
            <div className="explore-card-content">
              <h1>Snowboard</h1>
              <p>Shop Now</p>
            </div>
          </div>
          <div className="explore-card">
            <img
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwd2ba1807/FW21/W21-Mens-Shop-Landing-Page/Boots-crop.jpg?sw=1600&sfrm=jpeg&q=100"
              alt=""
            />
            <div className="explore-card-content">
              <h1>Boots</h1>
              <p>Shop Now</p>
            </div>
          </div>
          <div className="explore-card">
            <img
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwee3d981b/FW21/W21-Mens-Shop-Landing-Page/BrockCrouch_HokkaidoJPN_Blotto_8898.jpg?sw=1600&sfrm=jpg&q=100"
              alt=""
            />
            <div className="explore-card-content">
              <h1>Bindings</h1>
              <p>Shop Now</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenExploreMore;
