import { IonModal, IonPage } from "@ionic/react";
import React, {
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";
import "./ModalStyles.css";

import image1 from '../../image/Icons/Calendar.svg'
import image2 from '../../image/Icons/Tecnico.svg'
import image3 from '../../image/Icons/Tiempo.svg'


const ModalPayInformation = forwardRef((props: any, ref) => {
  const [showModal, setShowModal] = useState(false);
  useImperativeHandle(ref, () => ({
    showPopUp() {
      setShowModal(true);
    },
    hidePopUp() {
      setShowModal(false);
    },
  }));

  const setPayment = (value:any) => {
    props.setPayment(value);
    setShowModal(false);
  };    

  return (
    <IonModal isOpen={props.visible} cssClass="modal-custom">
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <div
          className="bg-white w-100 px-6 py-8"
          style={{
            borderTopLeftRadius: "22px",
            borderTopRightRadius: "22px",
          }}
        >
          <div className="flex ">
            <div className="text-3xl font-bold w-11/12">
              <p>Selecciona el metodo de pago</p>
            </div>
            <div onClick={() => setShowModal(false)}>
              <p className="font-extrabold text-2xl text-right w-1/12">X</p>
            </div>
          </div>
          <div
            className="border p-6 rounded-lg mt-6"
            onClick={() => setPayment("Efectivo")}
          >
            <h3 className="font-semibold text-2xl">
               <img src={image3} className="float-left mr-6" alt="" />  Pago en
              efectivo
            </h3>
            <p className="mt-6 text-gray-500">
              Paga cuando el servicio este finalizado, el pago se le realiza al
              técnico
            </p>
          </div>
          <div
            className="border p-6 rounded-lg mt-6"
            onClick={() => setPayment("Tarjeta")}
          >
            <h3 className="font-semibold text-2xl">
               <img src={image1} className="float-left mr-6" alt="" /> Pago con
              tarjeta de crédito
            </h3>
            <p className="mt-6 text-gray-500">
              Paga de forma segura con tu tarjeta de crédito a traves de PayU
              Latam
            </p>
          </div>
          <div className="mt-6 flex">
            <span className="w-1/2"></span>
             <img src={image2} className="w-1/2" alt="" />
          </div>
        </div>
      </div>
    </IonModal>
  );
});

export default ModalPayInformation;
