import React, { Component } from "react";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";

class PopupIncludes extends Component {
  componentDidUpdate() {}

  render() {
    return (
      <div className="popup-container">
        <div className="popup-body">
          <div className="popup-header">¡Recuerda!</div>
          <div className="popup-content">
            <div className="col-md-6">
              <div className="sh-b box-benefits scroll">
                <i
                  className="fa fa-check-circle fa-2x"
                  style={{ color: "#2ee22e" }}
                ></i>
                <br />
                <p className="fs-16 bolder f2 mt-5 fr-12">
                  Los servicios prestados incluyen:
                </p>
                <div className="raya"></div>
                <div className="pt-20 fr-12">
                  {this.props.st_currentServices.map((item) => (
                    <div key={item.id}>
                      <div className="mt-5">
                        <strong>{item.name}</strong>
                      </div>
                      {ReactHtmlParser(item.includes)}
                      <div className="raya"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sh-b box-benefits scroll">
                <i
                  className="fa fa-times-circle fa-2x"
                  style={{ color: "#da2f2f" }}
                ></i>
                <br />
                <p className="fs-16 bolder f2 mt-5 fr-12">
                  Los servicios prestados NO incluyen:
                </p>
                <div className="raya"></div>
                <div className="pt-20 fr-12">
                  {this.props.st_currentServices.map((item) => (
                    <div key={item.id}>
                      {ReactHtmlParser(item.not_include)}
                      <div className="raya"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="popup-footer text-center">
            <button className="btn btn-negro sh-b" onClick={this.props.hidePop}>
              Entiendo <i className="fa fa-check"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    st_currentServices: state.cart.currentServices,
  };
};

export default connect(mapStateToProps)(PopupIncludes);
