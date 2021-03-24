import React from "react";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonCard } from "@ionic/react";

interface Props {
  technical: any;
  setVisible: any;

}

const technical = ({ technical,setVisible }: Props) => {
  return (
    <IonCard className="m-5 p-3 h-auto shadow-md flex rounded-xl items-center justify-center  h-32 bg-white">
      <img onClick={()=>setVisible(true)}
        className="flex-none rounded-lg w-12 h-10 mr-4"
        src={technical.imageProfile}/>
      <div className="flex-col flex flex-grow h-auto justify-between">
        <span className="text-md my-1 text-black font-bold"> {technical.name}</span>
        <span className="text-sm text-gray-600">{technical.function}</span>
      </div>
      <div className="technical-icon flex justify-center">
        <FontAwesomeIcon
          className="flex h-6 flex-grow text-yellow-1000"
          icon={faComment}
        />
      </div>
    </IonCard>
  );
};

export default technical;
