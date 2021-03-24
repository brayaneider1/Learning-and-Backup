import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonMenu,
  IonContent,
  IonButtons,
  IonMenuButton,
  IonRouterOutlet,
} from "@ionic/react";
//@ts-ignore
import { Link } from "react-router-dom";
import LogoHeader from "../../img/logo.svg";
import { menuController } from "@ionic/core";
import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <>
      <IonRouterOutlet id="menuContent" />
      <IonHeader>
        <IonToolbar className="navbar-custom">
          <IonButtons slot="start">
            <IonMenuButton color="dark" autoHide={false} />
          </IonButtons>
          <IonTitle>
            <img className="mx-auto" src={LogoHeader} alt="logo-homepartner" />
          </IonTitle>
          <IonButtons slot="primary">
            <div className="w-20"></div>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonMenu
        side="start"
        type="overlay"
        contentId="menuContent"
        menuId="first"
        className="menu-custom"
      >
        <div className="flex py-8 px-8 border-b">
          <div className="w-2/12 flex items-center">
            <button
              onClick={() => menuController.close()}
              className="text-5xl px-4"
            >
              x
            </button>
          </div>
          <div className="w-10/12 flex items-center">
            <img
              className="mx-auto mt-2"
              src={LogoHeader}
              alt="logo-homepartner"
            />
          </div>
        </div>
        <IonContent className="menu-custom">
          <div className="p-8 border-b">
            <p className="text-sm text-gray-500">
              <strong>Menú</strong>
            </p>
            <div className="mb-4">
              <Link className="text-black " to="/categorias">
                <span className="fa-stack mr-3">
                  <i className="fa fa-circle-thin fa-stack-2x"></i>
                  <i className="fa fa-wrench fa-stack-1x"></i>
                </span>
                Servicios
              </Link>
            </div>
            <div className="mb-4">
              <Link className="text-black " to="/categorias">
                <span className="fa-stack mr-3">
                  <i className="fa fa-circle-thin fa-stack-2x"></i>
                  <i className="fa fa-bath fa-stack-1x"></i>
                </span>
                Productos
              </Link>
            </div>
            <div className="mt-8">
              <Link
                className="degrade-amarillo py-3 text-3xl px-8 font-semibold text-white rounded-lg hover:no-underline"
                to="/login"
                onClick={() => menuController.close()}
              >
                Ingresar
              </Link>
            </div>
          </div>
          <div className="p-8 border-b">
            <p className="text-sm text-gray-500">
              <strong>Sobre Home Partner</strong>
            </p>
            <div className="mb-4">
              <Link to="/" className="text-black">
                ¿Quienes somos?
              </Link>
            </div>
            <div className="mb-4">
              <Link to="/" className="text-black">
                Centro de Ayuda
              </Link>
            </div>
            <div className="mb-4">
              <Link to="/" className="text-black">
                Categorias de servicio
              </Link>
            </div>
          </div>
          <div className="p-8 border-b">
            <div className="mb-4">
              <Link to="/" className="w-full text-center btn-custom-yellow">
                Agendar una visita
              </Link>
            </div>
            <div className="mb-4">
              <Link to="/" className="w-full text-center btn-custom-yellow">
                No encuentro mi servicio
              </Link>
            </div>
          </div>
          <div className="p-8 border-b">
            <div className="mb-6">
              <Link className="text-black " to="/categorias">
                <i className="fa fa-user mr-3 fa-fw"></i>
                Ser un profesional
              </Link>
            </div>
            <div className="mb-6">
              <Link className="text-black " to="/categorias">
                <i className="fa fa-briefcase mr-3 fa-fw"></i>
                Trabaja con nosotros
              </Link>
            </div>
            <div className="mb-6">
              <Link className="text-black " to="/categorias">
                <i className="fa fa-phone mr-3 fa-fw"></i>
                Llámanos
              </Link>
            </div>
          </div>
        </IonContent>
      </IonMenu>
    </>
  );
};

export default Navbar;
