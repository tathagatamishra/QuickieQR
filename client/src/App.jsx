import React from "react";

import "./App.scss";

import Header from "./Component/Header/Header";
import Action from "./Component/Action/Action";
import Footer from "./Component/Footer/Footer";

import { DarkModeProvider } from "./assets/DarkModeContext";

export default function App() {

  return (
    <DarkModeProvider>
      <div className="App">
        <Header />
        <div className="webBody">
          <Action />
        </div>
        <Footer />
      </div>
    </DarkModeProvider>
  );
}
