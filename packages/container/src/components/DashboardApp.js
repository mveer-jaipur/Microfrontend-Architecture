import { mount } from "dashboard/DashboardApp";
import React, { useEffect, useRef } from "react";

const DashboardApp = () => {
  console.log("in lazy app");
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};

export default DashboardApp;
