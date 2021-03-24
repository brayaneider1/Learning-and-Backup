import React from "react";
import { withRouter } from "react-router-dom";

const NavbarBack: React.FC<any> = ({ history, text }) => {
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
        <h2 className="mt-0 pt-6 ml-4 text-3xl font-semibold">{text}</h2>
      </div>
    </div>
  );
};

export default withRouter(NavbarBack);
