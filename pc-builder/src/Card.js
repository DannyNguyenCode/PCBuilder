import React, { PureComponent } from "react";
import { sortBy, forEach } from "lodash";
import CPU from "./CardComponents/CPU";
import Motherboard from "./CardComponents/Motherboard";
import RAM from "./CardComponents/RAM";
import Case from "./CardComponents/Case";
import Cooling from "./CardComponents/Cooling";
import GPU from "./CardComponents/GPU";
import HDD from "./CardComponents/HDD";
import SSD from "./CardComponents/SSD";
import PSU from "./CardComponents/PSU";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      processors: [],
      amdProcessors: [],
      intelProcessors: [],
      brand: [
        { label: "AMD", value: "AMD" },
        { label: "Intel", value: "Intel" },
      ],
      amdprocessorLabels: [{ label: "", value: "" }],
      intelProcessorsLabels: [{ label: "", value: "" }],
    };
  }
  componentDidMount() {
    Promise.all([
      fetch("http://localhost:8080/amdprocessors"),
      fetch("http://localhost:8080/intelprocessors"),
    ])
      .then(([res1, res2]) => {
        return Promise.all([res1.json(), res2.json()]);
      })
      .then(([res1, res2]) => {
        this.setState({
          amdProcessors: sortBy(res1, [
            function (processor) {
              return processor.Model;
            },
          ]),
        });
        this.setState({
          intelProcessors: sortBy(res2, [
            function (processor) {
              return processor.name;
            },
          ]),
        });

        this.initializeLabels();
      })
      .catch((err) => {
        console.log("Error on mounting function " + err);
      });
  }
  check() {
    console.log("check " + this.state.amdProcessors);
  }
  initializeLabels() {
    let stateArr = [];
    let stateArr2 = [];
    this.state.amdProcessors.forEach((data) => {
      let newStateArr = { label: "", value: "" };
      newStateArr.label = data.Model;
      newStateArr.value = data.Model;
      stateArr.push(newStateArr);
    });
    this.state.intelProcessors.forEach((data) => {
      let newStateArr = { label: "", value: "" };
      newStateArr.label = data.name;
      newStateArr.value = data.name;
      stateArr2.push(newStateArr);
    });
    this.setState({
      amdprocessorLabels: stateArr,
    });
    this.setState({
      intelProcessorsLabels: stateArr2,
    });
    this.setState({
      processors: [
        ...this.state.amdprocessorLabels,
        ...this.state.intelProcessorsLabels,
      ],
    });
  }
  selectComp() {
    switch (this.props.comp) {
      case "CPU":
        return (
          <CPU
            value1={this.state.brand}
            value2={this.state.series}
            value3={this.state.generation}
            value4={this.state.processors}
          />
        );
      case "Motherboard":
        return (
          <Motherboard
            value1={this.state.brand}
            value2={this.state.chipset}
            value3={this.state.manufacturer}
          />
        );
      case "RAM":
        return <RAM />;
      case "Case":
        return <Case />;
      case "Cooling":
        return <Cooling />;
      case "GPU":
        return <GPU />;
      case "HDD":
        return <HDD />;
      case "SSD":
        return <SSD />;
      case "PSU":
        return <PSU />;
      default:
        return "Please check your code";
    }
  }

  render() {
    return (
      <div className="col-sm-4" style={{ marginBottom: "2em" }}>
        <div className="card">
          <h4 className="card-header">{this.props.comp}</h4>
          {this.check()}
          {this.selectComp()}
        </div>
      </div>
    );
  }
}
export default Card;
