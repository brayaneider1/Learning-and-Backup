import React, { useEffect, useState } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import {
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonToolbar,
  IonPage,
  IonApp,
} from "@ionic/react";
import StepsComponent from "../../../components/Steps/index";
import Technical from "../../../components/technical/index";
import Service from "../../../components/Service/index";
import Requests from "../../../components/Request/index";
import Slider from "../../../components/Slider/index";
import { service } from "../../../../services/ServiceRequest/ServiceActions";

import { useDispatch, useSelector } from "react-redux";
import ModalPayInformation from "../../../components/Popups/ModalPayInformation";
import ModalTechnical from "../../../components/Popups/ModalTechnical";

const Test: React.FC = () => {

const [visible, setvisible] = useState(false)

  const dispatch = useDispatch();
  const { getService, getCouncils } = service;

  const { services, councils } = useSelector((state: any) => state.service);

  useEffect(() => {
    dispatch(getService());
    console.log(services);
  }, [dispatch, getService]);

  useEffect(() => {
    dispatch(getCouncils());
  }, [dispatch, getCouncils]);

  return (
    <IonPage>
      <IonToolbar className="shadow-md">
        <IonButtons slot="start">
          <IonBackButton className="text-yellow-500" defaultHref="/" />
        </IonButtons>
        <IonTitle className="text-black">Detalle del Servicio</IonTitle>
      </IonToolbar>
      <IonContent>
        {services && (
          <>
            <StepsComponent />
            <Technical setVisible={setvisible}  technical={services[0].technical} />
            <Service services={services} />
            <Requests request={services[0].requestAditional} />
            <Slider popup={false} councils={councils} />
          </>
        )}
      </IonContent>
      <ModalTechnical councils={councils} setVisible={setvisible} visible={visible}/>
    </IonPage>
  );
};

export default Test;
