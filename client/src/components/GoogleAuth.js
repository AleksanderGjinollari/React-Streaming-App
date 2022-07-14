import React, { useEffect, useRef, useState } from "react";
const GoogleAuth = () => {
  const [isSignedIn, setIsSignedIn] = useState(null);
  const auth = useRef("");
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "83011242898-en7ni8e6fe1ujjb4jlae88c1p2fldm6k.apps.googleusercontent.com",
          scope: "email",
          plugin_name: "streamy",
        })
        .then(() => {
          auth.current = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(auth.current.isSignedIn.get());
          auth.current.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);
  const onAuthChange = () => {
    setIsSignedIn(auth.current.isSignedIn.get());
  };
  const onSignIn = () => {
    auth.current.signIn();
  };
  const onSignOut = () => {
    auth.current.signOut();
  };
  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };
  return <div>{renderAuthButton()}</div>;
};
export default GoogleAuth;
