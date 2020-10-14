import React from "react";

class PriceRundown extends React.Component {
  render() {
    let i = 0;
    let sum = 0;
    this.props.price.map((pr) => {
      return (sum += pr);
    });
    return (
      <div className="col-md-2" style={{ marginLeft: "15em" }}>
        <h4>Price Rundown</h4>
        <ul className="list-group">
          {this.props.comp.map((compz) => {
            return (
              <li class="list-group-item d-inline-flex justify-content-between align-items-center">
                {compz}
                <span class="badge badge-primary badge-pill">
                  ${this.props.price[i++].toFixed(2)}
                </span>
              </li>
            );
          })}
        </ul>
        <h4>Total</h4>
        <ul className="list-group">
          <li
            class="list-group-item list-group-item-light text-center"
            style={{ color: "black" }}
          >
            ${sum}
          </li>
        </ul>
      </div>
    );
  }
}
export default PriceRundown;
