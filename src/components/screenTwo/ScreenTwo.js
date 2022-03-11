import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import { getGreeting, getWeekdayMessage } from "../../helpers/helper";

function ScreenTwo() {
  const [name, setName] = useState("White cup of strong grey");
  const { userData } = useContext(AppContext);

  useEffect(() => {
    if (userData) {
      setName(`${userData.name + " " + userData.surname}`)
    }
  }, [userData]);

  const msg = getGreeting() + ", " + name + ", " + getWeekdayMessage();

  return (
    <div className="screen-wrapper">
     <div>
       { msg }
     </div>     
    </div>
  );
}

export default ScreenTwo;
