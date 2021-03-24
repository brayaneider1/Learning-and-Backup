import { IonContent, IonModal } from "@ionic/react";
import React, { useState, useImperativeHandle, forwardRef } from "react";
import "./ModalStyles.css";

import image1 from "../../image/backgrounds/electric.png";
import Slider from "../../components/Slider/index";

import { Button } from "antd";

const ModalTechnical = forwardRef((props: any, ref) => {
  const [showModal, setShowModal] = useState(false);
  useImperativeHandle(ref, () => ({
    showPopUp() {
      setShowModal(true);
    },
    hidePopUp() {
      setShowModal(false);
    },
  }));

  return (
    <IonModal isOpen={props.visible} cssClass="modal-custom ">
      <div  style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <div
          className="bg-white w-100 px-6 py-8 flex flex-col justify-between items-center"
          style={{
            borderTopLeftRadius: "22px",
            borderTopRightRadius: "22px",
          }}
        >
          <div className="midle-circle "/>
          <span className=" my-4 font-bold text-xl z-0 ">Tu técnico asignado es:</span>
          <div className="flex flex-col justify-between items-center bg-white shadow-md  rounded-3xl z-0 h-auto w-40 p-5 ">
          <img className="rounded-3xl w-full h-32 object-cover " src={image1}/>
          <span className=" my-3 font-bold text-sm">Domingo Gomez</span>
          <div className="flex justify-center items-center">
  <div className="flex items-center ">
    <svg className="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <svg className="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <svg className="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <svg className="mx-1 w-3 h-3 fill-current text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
    <svg className="mx-1 w-3 h-3 fill-current text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
  </div>
</div>
          </div>
          <p className="text-xs text-gray-400 text-center leading-4 font-normal mx-20 my-4">Técnico especialista con más de 20 años de experiencia.</p>
          <Slider popup={true}  councils={props.councils}  />
          <Button onClick={()=>props.setVisible(false)} className="w-full h-12  bg-gradient-to-r from-yellow-1000 to-yellow-1200 rounded-md text-white shadow-sm font-bold" > Entendido</Button>
        </div>
      </div>
    </IonModal>
  );
});

export default ModalTechnical;
