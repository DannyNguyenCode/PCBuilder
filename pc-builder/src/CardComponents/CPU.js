import React from "react";
import Select from "react-select";
import { filter } from "lodash";

class CPU extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption1: "",
      selectedOption2: "",
      filteredProcessors: [{ label: "" }],
    };
  }
  componentDidMount() {
    this.setState({
      filterProcessors: this.props.value4,
    });
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption1: selectedOption }, () =>
      console.log(selectedOption)
    );
  };
  filterData = () => {
    if (this.state.selectedOption1 === "") {
      return this.props.value4;
    } else {
      if (
        this.state.selectedOption1.label.toLowerCase() === "intel".toLowerCase()
      ) {
        let filterProcessor = this.props.value4.filter((data) =>
          data.label.toLowerCase().includes("intel".toLowerCase())
        );
        return filterProcessor;
      } else {
        let filterProcessor = this.props.value4.filter((data) =>
          data.label.toLowerCase().includes("AMD".toLowerCase())
        );
        return filterProcessor;
      }
    }
  };
  render() {
    const { selectedOption1 } = this.state.selectedOption1;
    const { selectedOption2 } = this.state.selectedOption2;
    return (
      <div className="card-body">
        <h4 className="card-title">Brand</h4>
        <Select
          value={selectedOption1}
          options={this.props.value1}
          onChange={this.handleChange}
        />
        <h4 className="card-title">Series</h4>
        <Select options={this.props.value2} />
        <h4 className="card-title">Generation</h4>
        <Select options={this.props.value3} />
        <br />
        <h4 className="card-title">CPU</h4>
        <Select
          value={selectedOption2}
          options={this.filterData()}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default CPU;
