import React from "react";
//@ts_ignore
import { Route, Switch } from "react-router-dom";
import MyService from "./Myservices/MyServices";
import Test from "./Test/Test";
import { IonApp } from "@ionic/react";
import Chat from "./Chat/Chat";

const Private = () => {
  return (
    <IonApp>
      <Switch>
        <Route exact path="/service">
          <MyService />
        </Route>
        <Route exact path="/">
          <Test />
        </Route>
        <Route exact path="/chat">
          <Chat />
        </Route>
      </Switch>
    </IonApp>
  );
};

export default Private;
