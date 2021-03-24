import { Link } from "react-router-dom";
import React from "react";

const WhatsappButton: React.FC = () => {
  return (
    <a href="https://api.whatsapp.com/send?phone=573217750455" target="_blank">
      <button
        className={`block w-full rounded-lg boton-whapp text-white font-bold text-2xl py-4 h-full items-center flex`}
      >
        <p className="text-center w-full mb-0">
          <i className="fa fa-whatsapp text-4xl mr-3"></i>
          <span className="text-whapp">¿Necesitas ayuda?</span>
        </p>
      </button>
    </a>
  );
};

export default WhatsappButton;
