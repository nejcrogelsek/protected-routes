import React from "react";
import { withRouter } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h1>Profile page</h1>
      <p>If you see this, it means you are authenticated!</p>
    </div>
  );
};

export default withRouter(Profile);
