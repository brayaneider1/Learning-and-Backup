import React from "react";

const Costs: React.FC<any> = ({ cost }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return (
    <div
      className="mt-8 mb-64 rounded-lg"
      style={{ backgroundColor: "rgba(252,188,49,0.08)" }}
    >
      <div
        className="py-5 rounded-lg"
        style={{ backgroundColor: "rgba(252,188,49,0.08)" }}
      >
        <p className="text-center font-semibold text-2xl">
          Valor de la visita diagnostica :
        </p>
        <p className="text-center font-bold text-4xl mb-0">$35.000</p>
      </div>
      <div className="px-5 py-5">
        <p className="text-gray-700 font-bold text-center">
          Valor aproximado del servicio: {formatter.format(cost)}
        </p>
        <p className="font-semibold mt-6">
          <span className="text-yellow-500">*</span> Recuerda que el valor de
          este servicio es una cotización aproximada. <br /> <br />
          <span className="text-yellow-500">*</span> Un técnico especializado
          realizará una visita diagnostica para confirmar tu cotización. <br />{" "}
          <br />
          <span className="text-yellow-500">*</span> Una vez el técnico haya
          verificado, te enviaremos la cotización. Si aceptas, descontaremos el
          valor de la visita. <br /> <br />
          <span className="text-yellow-500">*</span> En caso de que la
          cotización no sea aceptada, solo te cobraremos el valosr de la visita
          diagnostica.
        </p>
      </div>
    </div>
  );
};

export default Costs;
