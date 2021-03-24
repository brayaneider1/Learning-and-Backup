import React, { Component } from "react";
import Individual from "../ServiceGrid/individual";
import ServiceGrid from "../ServiceGrid";
import { Link, Redirect } from "react-router-dom";

class PopUpRelated extends Component {
  state = {
    redirect: false,
  };
  render() {
    return (
      <div className="popup-container">
        {this.state.redirect && <Redirect to="/confirmar-compra" />}

        <div className="popup-body">
          <div className="popup-header fs-16">Te puede interesar</div>
          <div
            className="popup-content"
            style={{ paddingLeft: "25px", paddingRight: "25px" }}
          >
            <div className="row">
              <div className="col-md-12">
                <div className="sh-b">
                  <p className="fs-16 bolder f2 mt-5 fr-16">
                    Deseas agregar esto a tú orden?
                  </p>
                  <div className="raya"></div>
                  <div className="pt-20 fr-12">
                    <div className="row visible-xs">
                      {this.props.services.map((item, index) => {
                        return (
                          <ServiceGrid
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            id={item.id}
                            subcategory={item.subcategory_id}
                            base_cost={item.base_cost}
                            counter={index}
                            includes={item.pop_includes}
                            not_include={item.pop_not_include}
                            itemCount={this.props.services.length}
                            onContinue={() => this.setState({ redirect: true })}
                          />
                        );
                      })}
                    </div>
                    <div className="row hidden-xs">
                      {this.props.services.map((item, index) => {
                        return (
                          <Individual
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            description={item.description}
                            id={item.id}
                            subcategory={item.subcategory_id}
                            base_cost={item.base_cost}
                            counter={index}
                            includes={item.pop_includes}
                            not_include={item.pop_not_include}
                            itemCount={this.props.services.length}
                          />
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="popup-footer mt-20 text-center">
            <Link to="/tienda">
              <button className="btn btn-negro sh-b mr-10 mb-10 centrado">
                <i className="fa fa-arrow-left"></i> Seguir comprando
              </button>
            </Link>
            <Link to="/confirmar-compra">
              <button className="btn btn-negro sh-b hidden-xs mb-10">
                Continuar <i className="fa fa-arrow-right"></i>
              </button>
            </Link>
            <Link
              className="btn btn-negro sh-b visible-xs centrado"
              to={"/confirmar-compra"}
            >
              Finalizar compra <i className="fa fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default PopUpRelated;
