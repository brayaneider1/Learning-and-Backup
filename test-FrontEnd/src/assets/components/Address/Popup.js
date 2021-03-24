import React, { Component } from "react";

class Popup extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      addressAddress: "",
      addressDescription: "",
      addressName: "",
      city: 1,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.sendAddress(this.state);
  }

  render() {
    return (
      <div className="sh-l" style={{ padding: "20px" }}>
        <div className="header-pop">
          <h3>
            <strong>Agregar nueva dirección</strong>
          </h3>
        </div>
        <div className="body-pop">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label className="f600">Dirección</label>
              <input
                className="form-control"
                name="addressAddress"
                onChange={this.onChange}
                value={this.state.addressAddress}
                required
                placeholder="Ej: (Calle 33 # 15 - 64..)"
              ></input>
            </div>
            <div className="form-group">
              <label className="f600">Información adicional</label>
              <input
                className="form-control"
                name="addressDescription"
                onChange={this.onChange}
                value={this.state.addressDescription}
                required
                placeholder="Ej: (int 1 apto 03...)"
              ></input>
            </div>
            <div className="form-group">
              <label className="f600">Nombre de la dirección</label>
              <input
                className="form-control"
                name="addressName"
                onChange={this.onChange}
                value={this.state.addressName}
                required
                placeholder="Ej: (Casa, Trabajo, Oficina...)"
              ></input>
            </div>
            <div className="form-group">
              <label className="f600">Ciudad</label>
              <select
                onChange={this.onChange}
                className="form-control"
                value={this.state.city}
                name="city"
              >
                <option value="1">Bogotá</option>
                <option value="2">Medellín</option>
              </select>
            </div>
            <div className="form-group text-right center-responsive">
              <button
                type="button"
                onClick={() => {
                  this.props.hidePop();
                }}
                className="btn btn-rojo hidden-xs"
                style={{ fontSize: "12px", marginBottom: "12px" }}
              >
                <i className="fa fa-save"></i> Cancelar
              </button>
              <button
                type="submit"
                className="btn btn-negro"
                style={{ fontSize: "12px", marginBottom: "12px" }}
              >
                <i className="fa fa-save"></i> Guardar Dirección
              </button>
              <button
                type="button"
                onClick={() => {
                  this.props.hidePop();
                }}
                className="btn btn-rojo visible-xs"
                style={{ fontSize: "12px", margin: "0 auto" }}
              >
                <i className="fa fa-save"></i> Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Popup;
