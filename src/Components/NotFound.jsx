import React from "react";
import Head from "./Helper/Head";

const NotFound = () => {
  return (
    <div className="container mainContainer">
      <Head title={error} />
      <h1 className="title">Error:404</h1>
      <p>Página não encontrada</p>
    </div>
  );
};

export default NotFound;
