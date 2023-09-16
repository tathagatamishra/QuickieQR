import React, { useState } from "react";

import "./App.scss";

import Header from "./Component/Header/Header";
import Action from "./Component/Action/Action";
import Footer from "./Component/Footer/Footer";

// import Input from "./Component/Input/Input";
// import Output from "./Component/Output/Output";

import { DarkModeProvider } from "./assets/DarkModeContext";

export default function App() {

  // const [outputData, setOutputData] = useState([]);

  // Callback function to receive data from the child component
  // const receiveInputData = (data) => {
  //   setOutputData(data);
  // };

  return (
    <DarkModeProvider>
      <div className="App">
        <Header />
        <div className="webBody">
          <Action />
          {/* <Input dataForParent={receiveInputData} /> */}
          {/* <Output dataFromParent={outputData} /> */}
        </div>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}
