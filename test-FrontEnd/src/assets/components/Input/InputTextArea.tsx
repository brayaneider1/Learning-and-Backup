import React from "react";

type InputProps = {
  label: string;
  placeholder: string;
  icon: string;
  className: string;
  onChange?: any;
  value?: any;
  onFocus?: any;
  name?: string;
  onRef?: any;
  error?: any;
  errorMsg?: string;
};
const InputTextareaComponent: React.FC<InputProps> = (props) => {
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
            <textarea
              className="w-full py-2 focus:outline-none"
              placeholder={props.placeholder}
              onChange={(e) => props.onChange(e.target.value)}
              value={props.value}
              onFocus={props?.onFocus}
              rows={4}
            />
          ) : (
            <textarea
              className="w-full py-2 focus:outline-none"
              placeholder={props.placeholder}
              ref={props.onRef}
              name={props.name}
              onFocus={props?.onFocus}
              rows={4}
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

export default InputTextareaComponent;
