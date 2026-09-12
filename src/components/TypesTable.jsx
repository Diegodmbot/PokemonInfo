import typesChartData from "../data/typesChart.json";
import "./TypesTable.css";

export const TypesTable = () => {
  const typesChart = typesChartData;
  return (
    <table className="typesTable">
      <thead>
        <tr>
          <th></th>
          {Object.keys(typesChart).map((type) => (
            <th key={type} className={"typesCell"}>
              <p className={`typesText ${type}`}>{type}</p>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Object.entries(typesChart).map(([type, effectiveness]) => (
          <tr key={type}>
            <th className={"typesCell"}>
              <p className={`typesText ${type}`}>{type}</p>
            </th>
            {Object.entries(effectiveness).map(([targetType, multiplier]) => (
              <td key={targetType}>{`${multiplier}x`}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
