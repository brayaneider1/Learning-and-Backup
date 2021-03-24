import React from "react";

type InputProps = {
  name?: string;
  label: string;
  placeholder: string;
  icon: string;
  className: string;
  type: string;
  onChange?: any;
  value?: any;
  onFocus?: any;
  error?: any;
  errorMsg?: string;
  onRef?: any;
};

const InputComponent: React.FC<InputProps> = (props) => {
  return (
    <>
      <div
        className={
          `flex border bg-white rounded-lg px-4 pt-3 ${props.className} ` +
          (props.error && " border-red-500")
        }
      >
        <div className="w-11/12 pr-4">
          <p className="text-base text-gray-500 font-bold mb-0">
            {props.label}
          </p>
          {props.onChange !== undefined ? (
            <input
              name={props.name}
              type={props.type}
              className="w-full py-2 focus:outline-none bg-white"
              placeholder={props.placeholder}
              onChange={(e) => props.onChange(e.target.value)}
              value={props.value}
              onFocus={props?.onFocus}
              ref={props.onRef}
            />
          ) : (
            <input
              name={props.name}
              type={props.type}
              className="w-full py-2 focus:outline-none bg-white"
              placeholder={props.placeholder}
              onFocus={props?.onFocus}
              ref={props.onRef}
            />
          )}
        </div>
        <div className="w-1/12 pt-6">
          {props.icon !== "none" && (
            <i className={`${props.icon} text-gray-500`}></i>
          )}
        </div>
      </div>
      {props.error && (
        <span className="text-red-500 text-base">{props.errorMsg}</span>
      )}
    </>
  );
};

export default InputComponent;
