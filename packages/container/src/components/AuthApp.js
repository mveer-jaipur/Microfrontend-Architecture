import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";
import React, { useRef, useEffect } from "react";

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const histroy = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: histroy.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = histroy.location;

        if (pathname !== nextPathname) {
          histroy.push(nextPathname);
        }
      },

      onSignIn,
    });

    histroy.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
