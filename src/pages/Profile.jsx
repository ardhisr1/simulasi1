import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Profile = () => {
  const history = useHistory();
  const status = localStorage.getItem("login");

  useEffect(() => {
    console.log(status);
    if (status) {
      history.push("/");
    }
  }, []);

  return (
    <>
      <h1>Profile</h1>
    </>
  );
};

export default Profile;
