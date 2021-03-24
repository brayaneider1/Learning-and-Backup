import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonPage,
  IonTitle,
  IonIcon,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import { arrowBackOutline, cameraOutline } from "ionicons/icons";
import { Input } from "antd";

import MessageGray from "../../../image/Icons/MensajeGray.svg";
import { dummy } from "../../../../common/utils/Dummy";

const Chat: React.FC = () => {
  return (
    <IonPage className="bg-gray-100">
      <IonToolbar className="shadow-md ">
        <IonButtons slot="start">
          <a href="/service">
            <IonIcon
              icon={arrowBackOutline}
              className="text-yellow-500  text-2xl"
            />
          </a>
        </IonButtons>
        <IonTitle className="text-black text-left">Domingo Gomez</IonTitle>
      </IonToolbar>
      <IonContent className="bg-white">
        {dummy.messages.length < 1 ? (
          <div className=" flex flex-col justify-center items-center h-full">
            <img className="h-8 font-medium " src={MessageGray} />
            <p className="text-gray-400 mx-24 mt-4 text-center font-medium text-sm">
              Aún no tienes mensajes ¿Deseas decirle algo?
            </p>
          </div>
        ) : (
          dummy.messages.map((item: any) => (
            <>
              {item.type === 1 ? (
                <div className="m-4 flex flex-col items-start">
                  <div className="rounded-r-l bg-gray-1000 py-3 px-3 h-auto w-3/5 text-black text-xs tracking-wide leading-4">
                    {item.message}
                  </div>
                </div>
              ) : (
                <div className="m-4 flex flex-col items-end">
                  <div className="rounded-r-r bg-gray-1100 py-3 px-3 h-auto  w-3/5 text-white text-xs tracking-wide leading-4 ">
                    {item.message}
                  </div>
                </div>
              )}
            </>
          ))
        )}
      </IonContent>
      <IonToolbar className="bottom-0 shadow-3xl p-2 ">
        <div className="flex flex-row justify-around items-center">
          <div className="flex flex-row items-center  h-10 border-item border-gray-200 rounded px-2  flex-1 ">
            <Input
              className="bg-transparent text-gray-400 text-xs text-left w-48 "
              placeholder=" Escriba un mensaje"
            />
            <span className="text-gray-400 text-xs font-bold absolute right-0 mr-20 ">
              Enviar
            </span>
          </div>
          <IonIcon icon={cameraOutline} className=" text-black mx-4 text-2xl" />
        </div>
      </IonToolbar>
    </IonPage>
  );
};

export default Chat;
