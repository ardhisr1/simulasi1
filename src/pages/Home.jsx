import React, { useEffect, useState } from "react";

const Home = () => {
  const [login, setLogin] = useState(true);
  localStorage.setItem("login", login);

  useEffect(() => {
    setLogin(false);
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Home</h1>
      </div>
    </>
  );
};

export default Home;
