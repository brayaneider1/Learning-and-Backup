import React from "react";
import {
  faCalendar,
  faMapMarker,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { IonCard, IonCardContent } from "@ionic/react";
import CardItem from "./CardItem";

interface Props {
  services: any;
}

const Service = ({ services }: Props) => {
  return (
    <IonCard className="mx-5 h-auto flex-col	shadow-md flex rounded-xl  bg-white">
      <IonCardContent className="flex-row flex flex-1 border-b-2 p-3 ">
        <img
          className="flex-none rounded-lg w-16 h-16 mr-3"
          src={services[0].image}
        />
        <div className="custom-col flex-grow h-16">
          <span className="text-lg text-black  font-bold">
            {services[0].name}
          </span>
          <p className="text-sm text-gray-600 mb-6"> {services[0].price}</p>
        </div>
      </IonCardContent>
      <CardItem
        title="Programada para"
        icon={faCalendar}
        data={services[0].time}
      />
      <div className="divider" />
      <CardItem
        title="Dirección del servicio"
        icon={faMapMarker}
        data={services[0].address}
      />
      <div className="divider" />
      <CardItem
        title="Método de pago"
        icon={faClock}
        data={services[0].paymetType}
      />
    </IonCard>
  );
};

export default Service;
