import React from "react";
import { Styles } from "./AttitudeArrow.style";

function AttitudeArrow({averageAttitude, factorA}) {
  let attitude = "";
  if (averageAttitude > factorA) {
    attitude = "up"
  } else {
    attitude = "down"
  }
  if (averageAttitude === factorA) {
    attitude = "equal";
  }
  return (
    <Styles>
      <div className={"attitude-arrow " + attitude}>
          <div className={"arrow " + attitude}></div>
      </div>
    </Styles>
  );
}

export default AttitudeArrow;
