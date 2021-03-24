import React, { Component } from "react";
import { connect } from "react-redux";
import Avatar from "../../img/avatar.jpg";
import {
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonContent,
} from "@ionic/react";
import { menuController } from "@ionic/core";
import { Link } from "react-router-dom";
import { logout } from "../../functions/AuthFunctions";
import { sendEvent } from "../../functions/GAFunctions";

class Menu extends Component {
  render() {
    return (
      <IonMenu side="end" type="overlay" contentId="content">
        <IonHeader>
          <IonToolbar color="dark">
            <IonTitle>Opciones</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <div className="mt-30">
              <div className="text-center">
                {this.props.st_userData.picture == null ? (
                  <img
                    src={Avatar}
                    style={{
                      margin: "auto 0px",
                      borderRadius: "90px",
                      width: "120px",
                    }}
                    alt="profile"
                  />
                ) : (
                  <img
                    src={this.props.st_userData.picture.replace(
                      "normal",
                      "large"
                    )}
                    alt="profile"
                    style={{
                      margin: "auto 0px",
                      borderRadius: "90px",
                      width: "120px",
                    }}
                  />
                )}

                <br />
                <br />
                <p className="f600">{this.props.st_userData.name}</p>
              </div>
            </div>
            <IonItem>
              <Link
                to="/perfil"
                onClick={() => {
                  sendEvent("Ver_perfil_menu");
                  menuController.close();
                }}
                className="gris-texto no-link "
              >
                <i
                  className="fa fa-user mr-10"
                  aria-hidden="true"
                  style={{
                    color: "#717171",
                    fontSize: "20px",
                  }}
                ></i>{" "}
                Ver Perfil
              </Link>
            </IonItem>
            <IonItem>
              <i
                className="fa fa-question  "
                aria-hidden="true"
                style={{
                  color: "#717171",
                  fontSize: "20px",
                  marginRight: "17px",
                }}
              ></i>{" "}
              Ayuda
            </IonItem>
            <IonItem>
              <Link
                to="/sugerencias"
                onClick={() => {
                  sendEvent("No_encuentro_el_servicio_menu");
                  menuController.close();
                }}
                className="gris-texto no-link "
              >
                <i
                  className="fa fa-search mr-10"
                  aria-hidden="true"
                  style={{
                    color: "#717171",
                    fontSize: "20px",
                  }}
                ></i>{" "}
                No encuentro el servicio
              </Link>
            </IonItem>
            <IonItem>
              <Link to="/historial" className="gris-texto no-link">
                {" "}
                <i
                  className="fa fa-history mr-10"
                  aria-hidden="true"
                  style={{
                    color: "#717171",
                    fontSize: "20px",
                  }}
                ></i>{" "}
                Historial
              </Link>
            </IonItem>
            <IonItem>
              <a
                href="tel:573217750455sugerencias"
                onClick={() => {
                  sendEvent("Llamada_menu");
                  menuController.close();
                }}
                className="gris-texto no-link "
              >
                <i
                  className="fa fa-phone mr-10"
                  aria-hidden="true"
                  style={{
                    color: "#717171",
                    fontSize: "20px",
                  }}
                ></i>{" "}
                Llámanos
              </a>
            </IonItem>
            <IonItem>
              <Link
                className="no-link gris-texto"
                to="/"
                onClick={() => {
                  menuController.close();
                  logout();
                }}
              >
                <i
                  className="fa fa-sign-out mr-10"
                  aria-hidden="true"
                  style={{
                    color: "#717171",
                    fontSize: "20px",
                  }}
                ></i>{" "}
                Cerrar sesión
              </Link>
            </IonItem>
          </IonList>
          <p style={{ marginTop: "120px" }} className="text-center">
            HomePartner App v1.0.0
            <br />
            2020
          </p>
        </IonContent>
      </IonMenu>
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
  };
};

export default connect(mapStateToProps)(Menu);
