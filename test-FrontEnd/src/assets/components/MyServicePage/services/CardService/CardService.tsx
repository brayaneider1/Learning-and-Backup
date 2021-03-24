import React, { useState } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";

import Calendar from "../../../../image/Icons/Calendar.svg";
import Time from "../../../../image/Icons/Tiempo.svg";
import { IonCard, IonCardContent } from "@ionic/react";
import CardItem from "./CardItem";

interface Props {
  services: any;
}

const CardService = ({ services }: Props) => {
  return (
    <IonCard className=" h-auto flex-col shadow-md flex rounded-xl  bg-white">
      {services.request.map((item: any) => (
        <IonCardContent className="flex-row flex items-center flex-1 border-b-2 p-3 ">
          <img
            className="flex-none object-cover rounded-md w-1/5 h-16 mr-3"
            src={item.img}
          />
          <div className="custom-col justify-between flex-grow h-16">
            <span className="text-md text-gray-800  font-bold">
              {item.name}
            </span>
            <p className="text-sm text-gray-500 font-medium mb-6">
              {item.price}
            </p>
          </div>
        </IonCardContent>
      ))}
      <CardItem
        title="Programada para"
        icon={Calendar}
        data={services.time}
        message={false}
        messageCount={services.messageCount}
      />
      <div className="divider" />
      <CardItem
        title="Dirección del servicio"
        icon={Time}
        data={services.comment}
        message={true}
        messageCount={services.messageCount}
      />
    </IonCard>
  );
};

export default CardService;
