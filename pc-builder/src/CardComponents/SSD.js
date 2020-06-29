import React from "react";
import Select from "react-select";
class SSD extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h4 className="card-title">Brand</h4>
        <Select options={this.props.value1} />
        <h4 className="card-title">Series</h4>
        <Select options={this.props.value2} />
        <h4 className="card-title">Generation</h4>
        <Select options={this.props.value3} />
      </div>
    );
  }
}
export default SSD;
