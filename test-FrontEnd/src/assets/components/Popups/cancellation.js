import React, { Component } from "react";

class CancellationPopUp extends Component {
  render() {
    return (
      <div className="popup-container">
        <div className="popup-body">
          <div className="popup-header">Cancelar servicio</div>
          <div className="popup-content">
            <row>
              <div className="col-md-12">
                <p className="fs-16 bolder f2 mt-5">
                  Cuentanos por qué vas a cancelar nuestro servicio:
                </p>
                <div className="raya"></div>
                <div
                  onClick={() =>
                    this.props.cancel("Ya no necesito el servicio")
                  }
                  className="card sh-b hover-amarillo mt-10 pointer"
                  style={{ backgroundColor: "#f9f9f9c4" }}
                >
                  Ya no necesito el servicio
                </div>
                <div
                  onClick={() => this.props.cancel("Conseguí otro técnico")}
                  className="card sh-b hover-amarillo mt-10 pointer"
                  style={{ backgroundColor: "#f9f9f9c4" }}
                >
                  Conseguí otro técnico
                </div>
                <div
                  onClick={() =>
                    this.props.cancel(
                      "Tuve un problema al seleccionar el servicio"
                    )
                  }
                  className="card sh-b hover-amarillo mt-10 pointer"
                  style={{ backgroundColor: "#f9f9f9c4" }}
                >
                  Tuve un problema al seleccionar el servicio
                </div>
                <div
                  onClick={() =>
                    this.props.cancel("Ya solucione el problema yo mismo")
                  }
                  className="card sh-b hover-amarillo mt-10 pointer"
                  style={{ backgroundColor: "#f9f9f9c4" }}
                >
                  Ya solucione el problema yo mismo
                </div>

                <button
                  className="btn btn-negro sh-b mt-20"
                  onClick={this.props.hidePop}
                >
                  Continuar con el servicio <i className="fa fa-check"></i>
                </button>
              </div>
            </row>
          </div>
          <div className="popup-footer text-center mt-20"></div>
        </div>
      </div>
    );
  }
}

export default CancellationPopUp;
