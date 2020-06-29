import React from "react";
import "./App.css";
import Card from "./Card";
import PriceRundown from "./PriceRundown";

class App extends React.Component {
  render() {
    let comps = [
      "CPU",
      "Motherboard",
      "RAM",
      "Case",
      "Cooling",
      "GPU",
      "HDD",
      "SSD",
      "PSU",
    ];
    let prices = [
      649.99,
      234.08,
      204.0,
      199.99,
      154.99,
      800.0,
      100.0,
      255.0,
      172.99,
    ];
    return (
      <div className="App">
        <h1 className="app-header">PC Builder</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="container-fluid" style={{ marginLeft: "8em" }}>
                <div className="row">
                  {comps.map((comp) => {
                    return <Card comp={comp} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
