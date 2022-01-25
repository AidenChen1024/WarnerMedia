import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAction } from "../state/Action";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAction());
  }, []);

  return (
      <div>
        {children}
        <footer className="py-5 bg-dark">
        </footer>
      </div>
  );
};

export default Layout;
