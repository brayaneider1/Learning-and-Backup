import React from "react";
import { withRouter } from "react-router-dom";

const NavbarSelect: React.FC<any> = ({
  history,
  select,
  onChange,
  selected,
  all,
}) => {
  return (
    <div
      className="py-2 bg-white shadow-lg fixed w-full"
      style={{ zIndex: 200 }}
    >
      <div className="flex">
        <div className="">
          <button className="ml-4 pt-6 px-4" onClick={() => history.goBack()}>
            <i className="fa fa-arrow-left text-4xl text-yellow-500"></i>
          </button>
        </div>
        <select
          onChange={(event) => onChange(event.target.value)}
          className="py-6 focus:outline-none"
          defaultValue={selected}
        >
          {all !== undefined && <option value="all">{all}</option>}
          {select.map((index:any, id:any) => {
            return (
              <option key={id} value={index.id}>
                {index.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default withRouter(NavbarSelect);
