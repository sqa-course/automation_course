import React, {useEffect} from 'react';
import Header from "../Header/Header.jsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const Root = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(location.pathname === '/') {
      navigate('/tree-selectors')
    }
  }, []);

  return (
      <>
        <Header />
        <Outlet />
      </>
  );
};

export default Root;
