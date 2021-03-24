import React  from "react";
import { IonCardContent } from "@ionic/react";
import Message from "../../../../image/Icons/Mensaje.svg";
import MessageGray from "../../../../image/Icons/MensajeGray.svg";

interface Props {
  title: string;
  data: string;
  icon: any;
  message?: boolean;
  messageCount: Number;
}

const CardItem = ({ title, icon, data, message, messageCount }: Props) => {
  return (
    <IonCardContent>
      <div className=" flex flex-row flex-1 items-center justify-between  ">
        <div className=" flex items-center">
          <img
            className="flex text-xl h-4 mr-3 relative float-left object-left text-yellow-1000"
            src={icon}
          />
          <div className="flex flex-col  justify-between">
            <span className="text-xs text-black font-bold text-yellow-1000">
              {title}
            </span>
            <span className="text-sm text-gray-600 font-medium">{data}</span>
          </div>
        </div>
        {message === true ? (
          messageCount === 0 ? (
            <div className="technical-icon-gray">
              <img className="flex h-6  " src={MessageGray} />
            </div>
          ) : (
            <a href="/chat">
              <div className="technical-icon shadow-md bg-gradient-to-l from-yellow-1000 to-yellow-400">
                <img className="flex h-6  " src={Message} />
                <span className="bg-white absolute rounded-xl border-8 shadow-2xl border-gray-900 h-3 w-3 ml-4 mt-5 "></span>
              </div>
            </a>
          )
        ) : null}
      </div>
    </IonCardContent>
  );
};

export default CardItem;
