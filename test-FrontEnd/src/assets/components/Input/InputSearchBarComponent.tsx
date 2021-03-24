import React from "react";

const InputSearchBar: React.FC = () => {
  return (
    <div className="bg-white p-5 shadow-input rounded-lg flex items-center">
      <i className="fa fa-search text-gray-500 text-3xl"></i>
      <input
        type="text"
        placeholder="Busca un servicio"
        className="ml-3 pt-2 pb-2 pl-2 w-full focus:outline-none"
      />
    </div>
  );
};

export default InputSearchBar;
