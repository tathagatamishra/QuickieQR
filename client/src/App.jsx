/* eslint-disable no-unused-vars */
import React, { useState } from "react";

import "./App.scss";

import Header from "./Component/Header/Header";
import Input from "./Component/Input/Input";
import Output from "./Component/Output/Output";
import Footer from "./Component/Footer/Footer";

import { DarkModeProvider } from "./assets/DarkModeContext";
import Action from "./Component/Action/Action";

export default function App() {

  const [childData, setChildData] = useState('');

  // Callback function to receive data from the child component
  const receiveDataFromChild = (data) => {
    setChildData(data);
  };

  return (
    <DarkModeProvider>
      <div className="App">
        <Header />
        <div className="webBody">
          <Input sendDataToParent={receiveDataFromChild} />
          <Output dataFromParent={childData} />
          <Action />
        </div>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}
