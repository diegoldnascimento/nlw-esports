import { useEffect, useState } from "react";
import logoImg from "./assets/logo-nlw-esports.png";
import { Callout } from "./presentation/components/callout/Callout";
import { Game } from "./presentation/components/game/Game";
import * as Dialog from '@radix-ui/react-dialog';
import { CreateAdModal } from "./presentation/components/createAdModal/CreateAdModal";

export interface GetGameOutput {
  id: string;
  title: string;
  backgroundImageUrl: string;
  createdAt: Date;
  updatedAt: Date;
  _count: {
    ads: number;
  };
}

function App() {
  const [hasUserClickedOnButton, setHasUserClickedOnButton] = useState(false);
  const [games, setGames] = useState<GetGameOutput[]>([]);

  const handleButtonClick = () => {
    setHasUserClickedOnButton(true);
  };

  const handle = () => { };

  useEffect(() => {
    fetch("http://localhost:3000/v1/games")
      .then((res) => res.json())
      .then((res) => {
        setGames(res);
      });
  }, []);

  return (
    <div className="max-w-6xl mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games &&
          games.length > 0 &&
          games.map((game: GetGameOutput) => {
            return (
              <Game
                key={game.id}
                id={game.id}
                title={game.title}
                subtitle={`${game._count.ads} anuncio`}
                backgroundImageUrl={game.backgroundImageUrl}
              />
            );
          })}
      </div>

      <Dialog.Root>
        <Callout
          title="Não encontrou seu duo?"
          subtitle="Publique um anúncio para encontrar novos players!"
        />
        <CreateAdModal games={games} />
      </Dialog.Root>
    </div >
  );
}

export default App;
