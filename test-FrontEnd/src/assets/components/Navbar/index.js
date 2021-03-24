import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Logo from "./../../img/logo_blanco.png";
import LogoHeader from "../../img/homepartner-logo.png";
import { setCartRedirect } from "../../store/actions/triggerActions";
import {
  IonHeader,
  IonToolbar,
  IonMenuButton,
  IonButtons,
  IonButton,
  IonRouterOutlet,
  IonImg,
  IonPopover,
} from "@ionic/react";
import { menuController } from "@ionic/core";
import ListCategories from "./ListCategories";

class NavbarComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      popOver: { servicios: false },
    };

    this.popOver = this.popOver.bind(this);
    this.disablePopOver = this.disablePopOver.bind(this);
  }

  popOver(key) {
    this.setState({
      popOver: { [key]: true },
    });
  }

  disablePopOver(key) {
    this.setState({
      popOver: { [key]: false },
    });
  }

  render() {
    return (
      <>
        <IonRouterOutlet></IonRouterOutlet>
        <IonHeader>
          <IonToolbar className="nav-yellow" color="primary">
            <IonButtons className="hidden-xs" slot="start">
              <Link to="/" className="">
                <IonImg
                  src={LogoHeader}
                  alt="logo-homepartner"
                  style={{ width: "200px", paddingLeft: "20px" }}
                />
              </Link>
            </IonButtons>
            <IonButtons slot="start" className="visible-xs">
              <Link to="/" className="">
                <img
                  style={{ width: "160px", float: "left" }}
                  src={Logo}
                  alt=""
                />
              </Link>
            </IonButtons>
            <IonButtons slot="end">
              <Link to="/">
                <IonButton
                  className="hidden-xs no-link blanco"
                  style={{ textTransform: "capitalize", fontWeight: "bolder" }}
                >
                  Inicio
                </IonButton>
              </Link>
              <IonButton
                className="hidden-xs blanco"
                style={{ textTransform: "capitalize", fontWeight: "bolder" }}
                onClick={() => this.popOver("servicios")}
              >
                Servicios
              </IonButton>
              <IonPopover
                isOpen={this.state.popOver.servicios}
                cssClass="popOverServicios"
                onDidDismiss={(e) => this.disablePopOver("servicios")}
                ref={(element) => (this.popOverServicios = element)}
              >
                <div className="pl-5 pr-5">
                  <div className="popOverServiciosContainer row pl-20 pr-20">
                    <h3 className="bolder mb-20">Categorias</h3>
                    <ListCategories
                      className=""
                      dismissPopOver={() => this.disablePopOver("servicios")}
                    />
                  </div>
                </div>
              </IonPopover>
              <Link to="/tienda">
                <IonButton
                  className="hidden-xs no-link blanco"
                  style={{ textTransform: "capitalize", fontWeight: "bolder" }}
                >
                  Tienda
                </IonButton>
              </Link>

              <a
                href="https://platform.homepartner.com.co/registrar-tecnico"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IonButton
                  className="no-link hidden-xs blanco text-capitalize f900"
                  style={{ fontWeight: "bolder" }}
                >
                  ¿Eres Profesional?
                </IonButton>
              </a>

              <IonButton className="ml-10 hidden-xs">
                <Link
                  className=""
                  to="/confirmar-compra"
                  onClick={this.props.linkedCart}
                >
                  <i className="fa fa-shopping-cart blanco"></i>
                  {this.props.st_listCart.length +
                    this.props.st_listProducts.length >
                    0 && (
                    <span className="badge badge-warning" id="lblCartCount">
                      {" "}
                      {this.props.st_listCart.length +
                        this.props.st_listProducts.length}{" "}
                    </span>
                  )}
                </Link>
              </IonButton>
              {this.props.st_loggedIn ? (
                <IonButtons slot="end">
                  <IonMenuButton className="visible-xs" autoHide={false} />
                  <button
                    className="hidden-xs btn btn-default btn-transparent"
                    onClick={() => menuController.open()}
                  >
                    <i className="fa fa-user"></i> {this.props.st_username}
                  </button>
                </IonButtons>
              ) : (
                <>
                  <Link to="/login" className="blanco no-link link-button f600">
                    Iniciar Sesión
                  </Link>
                  <Link
                    to="/register"
                    className="blanco no-link link-button hidden-xs f600"
                  >
                    Registrarse
                  </Link>
                </>
              )}
            </IonButtons>
          </IonToolbar>
        </IonHeader>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    st_listCart: state.cart.currentServices,
    st_loggedIn: state.user.loggedIn,
    st_username: state.user.userData.name,
    st_image: state.user.userData.picture,
    st_userData: state.user.userData,
    st_listProducts: state.cart.currentProducts,
  };
};

const setStateToProps = (dispatch) => {
  return {
    linkedCart: () => dispatch(setCartRedirect()),
  };
};

export default connect(mapStateToProps, setStateToProps)(NavbarComponent);
