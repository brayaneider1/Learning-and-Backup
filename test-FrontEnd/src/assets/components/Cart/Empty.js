import React, { Component } from "react";
import { Link } from "react-router-dom";

class Empty extends Component {
  render() {
    return (
      <div className="mtr-55">
        <h3 className="f2 fs-40 fr-18">
          <strong>Tu carrito esta vacio!</strong>
        </h3>
        <p className="fs-20 fr-16">
          Regresa al menú para solicitar un servicio o producto.
        </p>

        <Link to="/">
          <button className="btn btn-negro mt-20">
            Regresar al inicio <i className="fa fa-arrow-left"></i>
          </button>
        </Link>
      </div>
    );
  }
}

export default Empty;
