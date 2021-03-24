import React, { useEffect, useState } from "react";
import {
  IonPage,
} from "@ionic/react";
import Services from "../../../components/MyServicePage/services/services";
import { dummy } from "../../../../common/utils/Dummy";

const MyService: React.FC = () => {
  const [tabs, setTabs] = useState(true);
  const [progessItems, setProgessItems] = useState([]);
  const [sucesssItems, setSucessItems] = useState([]);


  const handleTabs = () => setTabs(!tabs);

  useEffect(() => {
    const progress:any=[]
    const sucess:any=[]
    dummy.services.map((item:any)=>(
      item.state==="ACTIVE"?progress.push(item):sucess.push(item)
    ));
    setProgessItems(progress)
    setSucessItems(sucess)
  },[dummy.services]);

  return (
    <IonPage className="bg-gray-100">
      <div className="shadow-md bg-white inset-x-0 top-0 h-10 flex justify-evenly flex-row items-center ">
        <span
          onClick={handleTabs}
          className={`cursor-pointer text-md font-bold ${
            tabs ? "text-gray-800" : "text-gray-500"
          }`}>En curso
        </span>
        <div className="border-r-2 border-fuchsia-600 text-gray-500">|</div>
        <span
          className={`cursor-pointer text-md font-bold ${
           !tabs ? "text-gray-800" : "text-gray-500"}`}
          onClick={handleTabs}>
          Historial
        </span>
      </div>
      {tabs ? (
        <div className="flex mt-2 flex-1 flex-row justify-center items-center ">
          <Services service={progessItems} />
        </div>
      ) : <Services service={sucesssItems} />}
    </IonPage>
  );
};

export default MyService;
