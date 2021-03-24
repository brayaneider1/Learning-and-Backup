import React, { useEffect, useState } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import technical from "../../../image/Icons/Tecnico.svg";
import CardService from "./CardService/CardService";
import { IonContent, IonPage } from "@ionic/react";
import { Button } from "antd";

interface Props {
  service: any;
}

const Services = ({ service }: Props) => {
  return (
    <IonContent className="w-auto flex justify-center  ">
      {service.length < 1 ? (
        <div className="flex flex-1 flex-col justify-center items-center h-full ">
          <img
            className="h-10 w-10 fill-current"
            src={technical}
            alt="technical"
          />
          <span className="text-gray-500 font-medium my-3 mx-4 px-8 text-md text-center">
            No tienes servicios en curso por el momento
          </span>
          <Button className="border-solid border-2 p-4 border-gray-500 rounded-lg text-gray-500 font-medium ">
            Solicitar un servicio
          </Button>
        </div>
      ) : (
        service?.map((item: any) => <CardService services={item} />)
      )}
    </IonContent>
  );
};

export default Services;
