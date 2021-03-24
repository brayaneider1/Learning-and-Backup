import React from "react";
interface Props {
  show: boolean;
}

const Steps = ({ show }: Props) => {

  return (
      <>
      {show===true?<div className="flex justify-center items-center">
       <span className="text-md m-5 text-green-1000 font-bold">
           Estamos trabajando para brindarte un mejor servicio
       </span>
   </div>:null
      }
      </>
   
  );
};

export default Steps;
