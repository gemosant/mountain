import React from "react";
import "./AccessoriesExploreMore.scss";

const AccessoriesExploreMore = () => {
  return (
    <>
      <div className="explore-container">
        <div className="explore-wrapper">
          <div className="explore-card">
            <img
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw7d18b4b4/S22/S22-Categories/SS21Catagories_Backpacks_JD_120720-crop.jpg?sw=768&sfrm=jpeg&q=100"
              alt=""
            />
              <h1 className="text">BACKPACKS</h1>
          </div>
          <div className="explore-card">
            <img
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwe11274b9/S22/S22-Categories/SS21Catagories_Coolers_JD_120720-crop.jpg?sw=768&sfrm=jpeg&q=100"
              alt=""
            />
              <h1 className="text">COOLER & KITS</h1>
          </div>
          <div className="explore-card">
            <img
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwee2b173b/S22/S22-Categories/SS21Catagories_Luggage_JD_120720-2crop.jpg?sw=768&sfrm=jpeg&q=100"
              alt=""
            />
              <h1 className="text">TRAVEL BAGS</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessoriesExploreMore;
