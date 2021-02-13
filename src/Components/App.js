import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import { useTitle } from "customHook";

const App = () => {
  return (
    <>
      <Router />
      <GlobalStyles />
    </>
  );
};

export default App;
