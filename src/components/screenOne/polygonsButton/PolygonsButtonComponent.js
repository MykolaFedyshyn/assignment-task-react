import React from "react";
import { Link } from "react-router-dom";
import Polygon from '../../../assets/polygon.svg';

function PolygonsButtonComponent() {
  
  return (
    <div className="polygons-button-wrapper">
      <Link to="/screen-two">
        <div className="polygons-button">
          <img src={Polygon} width="30px" height="30px" alt="polygon"/>
          <img src={Polygon} width="30px" height="30px" alt="polygon"/>
          <img src={Polygon} width="30px" height="30px" alt="polygon"/>  
        </div>
      </Link>
    </div>
  );
}

export default PolygonsButtonComponent;
