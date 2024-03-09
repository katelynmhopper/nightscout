import "./App.css";
import { useState, useEffect } from "react";
import DexcomData from "./DexcomData";
import InsulinData from "./InsulinData";
// import MyResponsiveAreaBump from "./Graph";

function App() {
  const [glucoseData, setGlucoseData] = useState(null);
  const [insulinData, setInsulinData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGlucoseData = async () => {
      const response = await fetch(
        `https://night1--wealthy-money--gd6q9x227znq.code.run/api/v1/entries.json`
      );
      const data = await response.json();
      setGlucoseData(data);
      const graphData = data
        .filter((item) => item !== null && item !== undefined)
        .map((item) => ({
          x: item.dateString,
          y: item.sgv,
        }));
      console.log("data", graphData);
    };

    const fetchInsulinData = async () => {
      const response = await fetch(
        `https://night1--wealthy-money--gd6q9x227znq.code.run/api/v1/treatments`
      );
      const data = await response.json();
      setInsulinData(data);
    };

    fetchGlucoseData();
    fetchInsulinData();
  }, []);

  useEffect(() => {
    if (glucoseData && insulinData) {
      setLoading(false);
    }
  }, [glucoseData, insulinData]);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (glucoseData && insulinData) {
    return (
      <div className="container">
        <h1 style={{ margin: "10px" }}>NightScout Copy Cat</h1>
        <div className="content">
          <div className="insulin-data">
            <InsulinData
              allInsulinData={insulinData}
              carbs={insulinData[0]?.carbs}
              duration={insulinData[0]?.duration}
              insulin={insulinData[0]?.insulin}
              currentBasal={insulinData[0]?.rate}
              eventType={insulinData[0]?.eventType}
              carbsOnBoard={insulinData[0]?.unabsorbed}
              time={insulinData[0]?.created_at}
            />
          </div>
          <div className="glucose-data">
            <DexcomData
              direction={glucoseData[0]?.direction}
              number={glucoseData[0]?.sgv}
              change={glucoseData[0]?.trend}
            />
          </div>
        </div>
        {/* <MyResponsiveAreaBump allGlucoseData={glucoseData} /> */}
      </div>
    );
  } else {
    return <h1>Data</h1>;
  }
}

export default App;
