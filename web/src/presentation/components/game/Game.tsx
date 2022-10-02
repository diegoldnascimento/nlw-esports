import React from "react";

type GameProps = {
  backgroundImageUrl: string;
  title: string;
  subtitle: string;
  id: string;
};

const Game = ({ id, backgroundImageUrl, title, subtitle }: GameProps) => {
  return (
    <>
      <a id={id} href="" className="relative rounded-lg overflown-hidden">
        <img src={backgroundImageUrl} />

        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0">
          <strong className="text-sm text-white block">{title}</strong>
          <span className="text-zinc-300 text-sm block mt-1">{subtitle}</span>
        </div>
      </a>
    </>
  );
};

export { Game };
