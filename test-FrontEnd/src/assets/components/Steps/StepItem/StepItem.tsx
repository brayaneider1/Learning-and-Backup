import React from "react";
import { faCalendarAlt,faUserAlt,faCheckCircle,faFileAlt,faWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StepItem = () => {
  return (
    <div className="w-full mx-auto">
       <div className="flex-col ml-5">
          <div className="w-full  text-center justify-center items-center flex-grow">
             <div className="pt-3 flex  flex-row justify-center">
             <div className="flex flex-row w-24 items-center cursor-pointer">
                   <div className="w-10 h-10 flex-row flex items-center justify-center">
                      <div className="rounded-full bg-white text-lg text-green-1000  border-item transition-all transform ease-in-out duration-200 w-10 h-10 font-bold flex justify-center items-center relative ">
                         <FontAwesomeIcon icon={faCalendarAlt}/>
                      </div>
                   </div>
                   <div className="top-50"></div>
                </div>
                <div className="flex flex-row w-24 items-center cursor-pointer">
                   <div className="w-10 h-10 flex-row flex items-center justify-center">
                      <div className="rounded-full bg-white text-lg text-green-1000  border-item transition-all transform ease-in-out duration-200 w-10 h-10 font-bold flex justify-center items-center relative ">
                      <FontAwesomeIcon icon={faUserAlt}/>
                      </div>
                   </div>
                   <div className="top-50"></div>
                </div>
                <div className="flex flex-row w-24 items-center cursor-pointer">
                   <div className="w-12 h-12 flex-row flex items-center justify-center">
                      <div className="rounded-full bg-white text-lg text-green-1000  border-item transition-all transform ease-in-out duration-200 w-12 h-12 font-bold flex justify-center items-center relative ">
                      <FontAwesomeIcon icon={faWrench}/>
                      </div>
                   </div>
                   <div className="top-50-gray"></div>
                </div>
                <div className="flex flex-row w-24 items-center cursor-pointer">
                   <div className="w-10 h-10 flex-row flex items-center justify-center">
                      <div className="rounded-full bg-white text-lg text-gray-1000  border-item-gray transition-all transform ease-in-out duration-200 w-10 h-10 font-bold flex justify-center items-center relative ">
                      <FontAwesomeIcon icon={faFileAlt}/>
                      </div>
                   </div>
                   <div className="top-50-gray"></div>
                </div>
                <div className="flex flex-row w-24 items-center cursor-pointer">
                   <div className="w-10 h-10 flex-row flex items-center justify-center">
                      <div className="rounded-full bg-white text-lg text-gray-1000  border-item-gray transition-all transform ease-in-out duration-200 w-10 h-10 font-bold flex justify-center items-center relative ">
                      <FontAwesomeIcon icon={faCheckCircle}/>
                      </div>
                   </div>
                </div>
            
             </div>
          </div>
       </div>
    </div>

  );
};

export default StepItem;
