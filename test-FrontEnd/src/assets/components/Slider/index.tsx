import React from "react";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IonSlide, IonSlides } from "@ionic/react";

interface Props {
  councils: any;
  popup:any;
}

const Slider = ({ councils,popup }: Props) => {
  const slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: {
      delay: 3000,
    },
  };

  return (
    <IonSlides
    className={`flex justify-center m-5 flex-col  shadow-md rounded-xl  items-center bg-yellow-1300 bg-opacity-25${
      popup ? "h-20 w-full" : "h-56"
    }`}
      pager={true}
      options={slideOpts}
    >
      {councils.map((item: any) => (
        <IonSlide className="flex-col px-6 py-5 flex justify-evenly">
          <span className="text-sm text-black font-bold text-center my-2">
            Ten en cuenta estos 5 tips para que tengas un buen servicio
          </span>
          <div className="flex-row px-2 flex items-center slider-custom my-4">
            <div className=" h-10 flex p-2 items-center w-10 w-auto  mr-3 bg-white border rounded-md ">
              <FontAwesomeIcon
                icon={faClock}
                className=" flex text-xl  text-yellow-1000"
              />
            </div>
            <span className="text-sm flex-grow text-black flex-grow ">
              {item.council}
            </span>
          </div>
        </IonSlide>
      ))}
    </IonSlides>
  );
};

export default Slider;
