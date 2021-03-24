import React from "react";
import { withRouter } from "react-router-dom";
import { IonButton } from "@ionic/react";

const BackMovil = ({ history }) => {
  return (
    <div
      className="visible-xs"
      style={{ position: "absolute", zIndex: "999", paddingLeft: "10px" }}
    >
      <IonButton
        style={{ letterSpacing: "12" }}
        color="light"
        onClick={() => history.goBack()}
      >
        {" "}
        <i className="fa fa-arrow-left "></i>
      </IonButton>
    </div>
  );
};

export default withRouter(BackMovil);
