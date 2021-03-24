import React, { Component } from "react";

class List extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {};
  }

  render() {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0
    });
    return (
      <div className="row" style={{ marginBottom: "17px" }}>
        <div className="col-xs-8">
          <p>
            {this.props.name} x {this.props.quantity}
          </p>
        </div>
        <div className="col-xs-4 text-right">
          <strong className="f600">
            {" "}
            {formatter.format(this.props.base_cost * this.props.quantity)}
          </strong>
          <br />
          <button
            onClick={this.props.onDeleteCart}
            className="btn btn-delete btn-danger"
          >
            Eliminar
          </button>
        </div>
      </div>
    );
  }
}

export default List;
