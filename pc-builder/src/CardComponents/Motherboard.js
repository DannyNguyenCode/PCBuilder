import React from "react";
import Select from "react-select";
class Motherboard extends React.Component {
  render() {
    return (
      <div className="card-body">
        <h4 className="card-title">Platform</h4>
        <Select options={this.props.value1} />
        <h4 className="card-title">Chipset Socket</h4>
        <Select options={this.props.value2} />
        <h4 className="card-title">Manufacturer</h4>
        <Select options={this.props.value3} />
      </div>
    );
  }
}
export default Motherboard;
