import React, { useState } from "react";
import { IonLabel, IonCard, IonCardContent } from "@ionic/react";
import { DownOutlined,UpOutlined } from "@ant-design/icons";
import StepItems from "./StepItem/StepItem";
import Description from "./StepItem/Descrption";

const Steps = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <IonCard className="m-5 flex-col shadow-md flex rounded-xl h-auto bg-white  flex-col">
      <StepItems />
      {show && <Description show={show} />}
      <p className="text-black font-bold text-md p-5 mr-12">
        Estamos realizando un diagnostico de tu problema
      </p>
      <IonCardContent onClick={()=>setShow(!show)} className=" cursor-pointer border-t flex-row flex  items-center  justify-center">
        <IonLabel className="flex">Ver mas</IonLabel>
       {show?<UpOutlined  className="m-2" />:<DownOutlined  className="m-2" />}
       
      </IonCardContent >
    </IonCard>
  );
};

export default Steps;
