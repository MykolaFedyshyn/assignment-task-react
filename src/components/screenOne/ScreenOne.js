import React, { useContext, useMemo } from "react";
import { TableComponent } from "./table/TableComponent";
import { default as usersData } from "../../inputData.json";
import { calcPersonAverageAttitude } from "../../helpers/helper";
import AttitudeArrow from "./table/attitudeArrow/AttitudeArrow";
import { ChartComponent } from "./chart/ChartComponent";
import PolygonsButtonComponent from "./polygonsButton/PolygonsButtonComponent";
import { AppContext } from "../../contexts/AppContext";

function ScreenOne() {
  const {chartData, factorA} = useContext(AppContext);

  const columns = useMemo(
    () => [
      {
        Header: `Personal Attitude Behavior Table`,
        columns: [
          {
            Header: 'Sq. N',
            accessor: 'id',
          },
          {
            Header: 'First Name',
            accessor: 'name',
          },
          {
            Header: 'Second Name',
            accessor: 'surname',
          },
        ],
      },
      {
        Header: `Factor A: ${factorA}`,
        columns: [
          {
            Header: 'Attitude Behavior',
            accessor: 'attitude',
          }
        ],
      },
    ],
    [factorA]
  );

  const tableData = React.useMemo(() => usersData.map((user) => {
    return {
      id: user.id,
      name: user.name,
      surname: user.surname,
      attitude: <AttitudeArrow averageAttitude={calcPersonAverageAttitude(user.data)} factorA={factorA} />,
      data: user.data
    }
  }), [factorA]);

  return (
      <div className="screen-wrapper">
        <div className="chart-wrapper">
          { chartData && <ChartComponent factorA={factorA} /> }
        </div>
        <br />
        <div className="table-wrapper">
          <TableComponent 
            columns={columns}
            data={tableData} />
          { chartData && <PolygonsButtonComponent /> }
        </div>
      </div>
  );
}

export default ScreenOne;
