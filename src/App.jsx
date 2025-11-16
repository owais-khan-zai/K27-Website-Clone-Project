import React from "react";
import "remixicon/fonts/remixicon.css";
import Router from "./router/Routes";
import { PeopleProvider } from "./context/Context";

const App = () => {
  return (
    <PeopleProvider>
      <Router />
    </PeopleProvider>
  );
};

export default App;
