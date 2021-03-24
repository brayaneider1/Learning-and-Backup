import React from "react";
import { IonCardContent } from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  data: string;
  icon: any;
}

const CardItem = ({ title, icon, data }: Props) => {
  return (
    <IonCardContent>
      <div className=" flex flex-row flex-1 items-center ">
        <FontAwesomeIcon
          className="flex text-xl h-6 mr-3 relative float-left object-left text-yellow-1000"
          icon={icon}
        />
        <div className="flex flex-col  justify-between">
          <span className="text-xs text-black font-bold text-yellow-1000">
            {title}:
          </span>
          <span className="text-sm text-gray-600">{data}</span>
        </div>
      </div>
    </IonCardContent>
  );
};

export default CardItem;
