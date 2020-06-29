import React from "react";
import Select from "react-select";

class CPU extends React.Component {
  state = { selectedOption: null };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
  };
  render() {
    const { selectedOption } = this.state;
    return (
      <div className="card-body">
        <h4 className="card-title">Brand</h4>
        <Select
          options={this.props.value1}
          onChange={this.handleChange}
          value={selectedOption}
        />
        <h4 className="card-title">Series</h4>
        <Select options={this.props.value2} />
        <h4 className="card-title">Generation</h4>
        <Select options={this.props.value3} />
        <br />
        <h4 className="card-title">CPU</h4>
        <Select options={this.props.value4} />
      </div>
    );
  }
}

export default CPU;
