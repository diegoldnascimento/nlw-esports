import { useState } from "react";
import logoImg from "./assets/logo-nlw-esports.png";

function App() {
  return (
    <div className="max-w-{1334px} mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu duo está aqui
      </h1>
    </div>
  );
}

export default App;
