import React from "react";

const AddQuantity: React.FC<any> = ({ onAdd, onMinus, quantity }) => {
  return (
    <div className="w-auto">
      <div className="flex border-2 border-yellow-500 rounded-lg">
        {quantity !== 0 ? (
          <>
            <div
              onClick={() => onMinus()}
              className="border-r-2 border-yellow-500 py-3 px-5"
              style={{ backgroundColor: "rgba(252,188,49,0.24)" }}
            >
              <i className="fa fa-minus text-yellow-500"></i>
            </div>
            <div className="text-yellow-500 font-bold px-5 py-3">
              {quantity}
            </div>
          </>
        ) : (
          <>
            <div className="text-yellow-500 font-bold px-5 py-3">Agregar</div>
          </>
        )}

        <div
          onClick={() => onAdd()}
          className="border-l-2 border-yellow-500 py-3 px-5"
          style={{ backgroundColor: "rgba(252,188,49,0.24)" }}
        >
          <i className="fa fa-plus text-yellow-500"></i>
        </div>
      </div>
    </div>
  );
};

export default AddQuantity;
