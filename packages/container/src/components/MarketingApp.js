import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";
import React, { useRef, useEffect } from "react";

const MarketingApp = () => {
  const ref = useRef(null);
  const histroy = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = histroy.location;

        if (pathname !== nextPathname) {
          histroy.push(nextPathname);
        }
      },
    });

    histroy.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
