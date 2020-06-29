import React, { PureComponent } from "react";
import { sortBy } from "lodash";
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
      brand: [
        { value: "AMD", label: "amd" },
        { value: "Intel", label: "intel" },
      ],
    };
  }
  componentDidMount() {
    fetch("http://localhost:8080/amdprocessors")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          processors: sortBy(data, [
            function (processor) {
              return processor.Model;
            },
          ]),
        });
      })
      .catch((err) => {
        console.log("Error on mounting function " + err);
      });
  }
  check() {
    const proc = this.state.processors.map((procs) => {
      return procs.Model;
    });
    return proc;
  }
  selectComp() {
    switch (this.props.comp) {
      case "CPU":
        return (
          <CPU
            value1={this.state.brand}
            value2={this.state.series}
            value3={this.state.generation}
            value4={this.check()}
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
          {this.selectComp()}
        </div>
      </div>
    );
  }
}
export default Card;
