import React from "react";

type InputProps = {
  label: string;
  placeholder: string;
  icon: string;
  className: string;
  onChange?: any;
  value?: any;
  onFocus?: any;
  options?: Array<any>;
  error?: any;
  errorMsg?: string;
  onRef?: any;
  name?: string;
};
const InputSelectComponent: React.FC<InputProps> = (props) => {
  return (
    <>
      <div
        className={`flex border bg-white rounded-lg px-4 pt-3 ${
          props.className
        } ${props.error && "border-red-500"}`}
      >
        <div className="w-11/12 pr-4">
          <p className="text-base text-gray-500 font-bold mb-0">
            {props.label}
          </p>
          {props.onChange !== undefined ? (
            <select
              className="w-full py-2 focus:outline-none bg-white"
              onChange={(e) => props.onChange(e.target.value)}
              value={props.value}
              onFocus={props?.onFocus}
            >
              <option value="" disabled selected>
                {props.placeholder}
              </option>
              {props.options?.map((index) => {
                return <option value={index.value}>{index.name}</option>;
              })}
            </select>
          ) : (
            <select
              className="w-full py-2 focus:outline-none bg-white"
              name={props.name}
              onFocus={props?.onFocus}
              ref={props?.onRef}
            >
              <option value="" disabled selected>
                {props.placeholder}
              </option>
              {props.options?.map((index) => {
                return <option value={index.value}>{index.name}</option>;
              })}
            </select>
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

export default InputSelectComponent;
