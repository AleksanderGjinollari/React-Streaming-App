import React from "react";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId:
          "83011242898-en7ni8e6fe1ujjb4jlae88c1p2fldm6k.apps.googleusercontent.com",
        scope: "email",
        plugin_name: "streamy",
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
