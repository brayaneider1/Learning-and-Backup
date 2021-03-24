import React from "react";
import { IonCard, IonCardContent } from "@ionic/react";

interface Props {
  request: any;
}

const Request = ({ request }: Props) => {
  return (
    <IonCard className="m-5 pt-3 px-2 h-auto flex-col	align-middle  shadow-md flex rounded-xl  bg-white">
      <span className="text-xs ml-4 text-black font-bold text-yellow-1000">
        Servicios solicitados
      </span>
      {request.map((item: any) => (
        <>
          <IonCardContent className="flex-row h-20 flex items-center  ">
            <div className="rounded-lg h-8 w-8 text-gray-700 font-bold flex justify-center items-center bg-yellow-1000 bg-opacity-25 ">
              x{item.quantity}
            </div>
            <IonCardContent className="flex-col w-full ">
              <div className="flex-row flex ">
                <span className="text-md flex-1 mr-5 text-gray-600 ">{item.name}</span>
                <span className="text-md flex-1 text-gray-800 font-bold">
                  {item.price}
                </span>
              </div>
              <div className="divider-col" />
            </IonCardContent>
          </IonCardContent>
        </>
      ))}
    </IonCard>
  );
};

export default Request;
