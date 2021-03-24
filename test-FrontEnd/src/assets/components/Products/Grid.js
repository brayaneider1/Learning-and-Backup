import React, { Component } from "react";
import { serverlink } from "./../../enviroment";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { IonImg } from "@ionic/react";

class ProductGrid extends Component {
  render() {
    if (this.props.st_notSame && this.state.quantity != 0) {
      this.setState({ quantity: 0 });
    }

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });

    return (
      <>
        {this.props.counter % 4 === 0 ? (
          <div className="clearfix hidden-xs"></div>
        ) : null}
        {this.props.counter % 2 === 0 ? (
          <div className="clearfix visible-xs"></div>
        ) : null}
        <Link to={"/product/" + this.props.id}>
          <div className="col-md-3 mb-20 col-xs-6 pdr-2">
            <div
              className="sh-l padeado20 pb-20 box-service-grid"
              style={{ minHeight: "320px" }}
            >
              <IonImg
                src={this.props.image}
                className="img-responsive"
                style={{ borderBottom: "solid 4px #f2bb2f" }}
                alt=""
              />
              <p
                className="mt-10 fs-16 fr-1212 mhr-30 f600 no-link"
                style={{ color: "#000" }}
              >
                {this.props.name}
              </p>
              <p className="text-right fs-16 fr-14" style={{ color: "#777" }}>
                <small className="fr-16">
                  {formatter.format(this.props.base_cost)}
                </small>
              </p>
              <p className="fs-12 hidden-xs">
                {ReactHtmlParser(this.props.description)}
                <br />
              </p>
            </div>
          </div>
        </Link>
      </>
    );
  }
}

export default ProductGrid;
