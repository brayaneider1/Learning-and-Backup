import React from 'react';
import { withRouter } from 'react-router-dom';

const Back = ({ history }) => <button className="btn" style={{marginTop:"6px", background: "transparent"}} onClick={() => history.goBack()}  > <i className="fa fa-arrow-left "></i> Atrás</button>;

export default withRouter(Back);