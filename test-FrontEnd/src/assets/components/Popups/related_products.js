import React, { Component } from "react";
import Individual from "../Products/individual";
import { Link } from "react-router-dom";

class PopUpRelated extends Component {
  render() {
    return (
      <div className="popup-container">
        <div className="popup-body">
          <div className="popup-header fs-16">Te puede interesar</div>
          <div
            className="popup-content"
            style={{ paddingLeft: "10px", paddingRight: "10px" }}
          >
            <div className="row">
              <div className="col-md-12">
                <div className="">
                  <div className="fr-12">
                    <div className="row">
                      {this.props.products.map((item, index) => {
                        return <Individual key={item.id} item={item} />;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="popup-footer mt-20 text-center">
            <Link to="/confirmar-compra">
              <button className="btn btn-negro sh-b hidden-xs mb-10">
                Continuar <i className="fa fa-arrow-right"></i>
              </button>
            </Link>
            <Link to="/confirmar-compra">
              <button
                className="btn btn-negro sh-b visible-xs centrado"
                onClick={this.props.hidePop}
              >
                Finalizar compra <i className="fa fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUpRelated;
