import { useState } from "react";
import logoImg from "./assets/logo-nlw-esports.png";
import { Callout } from "./presentation/components/callout/Callout";
import { Game } from "./presentation/components/game/Game";

function App() {
  return (
    <div className="max-w-{1334px} mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        <Game
          title="League of Legends"
          subtitle="4 anùncios"
          backgroundImageUrl="/game-1.png"
        />

        <Game
          title="Apex Legends"
          subtitle="4 anùncios"
          backgroundImageUrl="/game-4.png"
        />
        <Game
          title="CS-GO"
          subtitle="4 anùncios"
          backgroundImageUrl="/game-3.png"
        />
        <Game
          title="World of Warcraft"
          subtitle="4 anùncios"
          backgroundImageUrl="/game-6.png"
        />
        <Game
          title="Dota 2"
          subtitle="4 anùncios"
          backgroundImageUrl="/game-2.png"
        />
        <Game
          title="Fortinite"
          subtitle="4 anùncios"
          backgroundImageUrl="/game-5.png"
        />
      </div>

      <Callout
        title="Não encontrou seu duo?"
        subtitle="Publique um anúncio para encontrar novos players!"
      />
    </div>
  );
}

export default App;
