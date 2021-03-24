import React, { Component } from "react";

class List extends Component {
  render() {
    return (
      <div className="raya row">
        <div className="col-xs-8">
          <label htmlFor="">
            <input
              type="radio"
              name="address"
              value={this.props.id}
              onChange={this.props.changeAddress}
            />
            <strong className="f600"> {this.props.name}</strong> <br />
            <small className="f300" style={{ color: "#a7a7a7" }}>
              {" "}
              {this.props.address} - {this.props.description}
            </small>
          </label>
        </div>
        <div className="col-xs-4 text-rigth">
          <button
            className="btn btn-negro"
            type="button"
            onClick={this.props.onDelete}
            style={{
              fontSize: "10px",
              padding: "2px 6px",
              minWidth: "auto",
              marginLeft: "10px"
            }}
          >
            {" "}
            Eliminar
          </button>
        </div>

        <br />
      </div>
    );
  }
}

export default List;
