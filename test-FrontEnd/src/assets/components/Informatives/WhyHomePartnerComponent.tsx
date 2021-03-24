import React from "react";
import Sura from "../../img/sura_home.png";
import tiempo from "../../img/tiempo.svg";
import certificado from "../../img/certificado.svg";
import precios from "../../img/precios.svg";
import tecnico from "../../img/tecnico.svg";

const WhyHomePartner: React.FC = () => {
  return (
    <div className="bg-yellow-200">
      <h3 className="font-bold text-xl text-center py-6 px-8 ronded-lg">
        Por qué pedir un servicio <br /> con Home Partner?
      </h3>

      <div className="flex px-4">
        <div className="w-1/4 px-2 ">
          <div className="bg-white rounded-lg px-4 py-8 shadow-lg">
            <img src={tiempo} alt="" className="mx-auto" />
          </div>
          <p className="text-base text-center mt-2 font-semibold">
            Servicio inmediato
          </p>
        </div>
        <div className="w-1/4 px-2 ">
          <div className="bg-white rounded-lg px-4 py-8 shadow-lg">
            <img src={tecnico} alt="" className="mx-auto" />
          </div>
          <p className="text-base text-center mt-2 font-semibold">
            Técnicos certificados
          </p>
        </div>
        <div className="w-1/4 px-2 ">
          <div className="bg-white rounded-lg px-4 py-8 shadow-lg">
            <img src={certificado} alt="" className="mx-auto" />
          </div>
          <p className="text-base text-center mt-2 font-semibold">
            Servicio garantizado
          </p>
        </div>
        <div className="w-1/4 px-2 ">
          <div className="bg-white rounded-lg px-4 py-8 shadow-lg">
            <img src={precios} alt="" className="mx-auto" />
          </div>
          <p className="text-base text-center mt-2 font-semibold">
            Precios <br /> justos
          </p>
        </div>
      </div>
      <div className="mt-8 pb-8">
        <img src={Sura} className="mx-auto" alt="" />
      </div>
    </div>
  );
};

export default WhyHomePartner;
