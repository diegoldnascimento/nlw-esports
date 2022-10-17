import { useEffect, useState } from "react";
import logoImg from "./assets/logo-nlw-esports.png";
import { Callout } from "./presentation/components/callout/Callout";
import { Game } from "./presentation/components/game/Game";
import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from "phosphor-react";
import { Input } from "./presentation/components/form/input/Input";

interface GetGameOutput {
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

    console.log("Opa!@");
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
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
            <Dialog.Title className="text-4xl text-white font-black">Publique um anúncio</Dialog.Title>
            <Dialog.Description className="">
              <form className="mt-8 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="game" className="font-semibold">Qual o game?</label>
                  <Input id="game" placeholder="Selecione o game que deseja jogar" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="name">Seu nome (ou nickname)</label>
                  <Input type="text" id="name" placeholder="Como te chamam dentro do game?" />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="yearsPlaying">Joga há quantos anos?<label />
                    </label>

                    <Input type="text" id="yearsPlaying" placeholder="Tudo bem ser  ZERO" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="discord">Qual seu Discord?</label>
                    <Input type="text" id="discord" placeholder="Usuario#0000" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <div>
                      <label htmlFor="weekDays">Quando costuma jogar?</label>

                      <div className="grid grid-cols-4 gap-2">
                        <button title="Domingo" className="w-8 h-8 rounded bg-zinc-900">D</button>
                        <button title="Segunda" className="w-8 h-8 rounded bg-zinc-900">S</button>
                        <button title="Terça" className="w-8 h-8 rounded bg-zinc-900">T</button>
                        <button title="Quarta" className="w-8 h-8 rounded bg-zinc-900">Q</button>
                        <button title="Quinta" className="w-8 h-8 rounded bg-zinc-900">Q</button>
                        <button title="Sexta" className="w-8 h-8 rounded bg-zinc-900">S</button>
                        <button title="Sábado" className="w-8 h-8 rounded bg-zinc-900">S</button>
                      </div>
                    </div>
                  </div>
                  <div>

                    <label htmlFor="hoursStart">Qual horário do dia?</label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input id="hoursStart" type="time" placeholder="De" />
                      <Input id="hoursEnd" type="time" placeholder="Até" />
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex gap-2 text-sm">
                  <Input type="checkbox" />
                  Costume me conectar ao chat de voz
                </div>
                <footer className="mt-4 flex justify-end gap-4">
                  <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">Cancelar</Dialog.Close>
                  <button className="bg-violet-500 px-5 h-12 rounded-md font-semibold gap-3 flex items-center hover:bg-violet-600" type="submit">
                    <GameController size={24} className="w-6 h-6" />
                    Encontrar duo
                  </button>
                </footer>
              </form>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div >
  );
}

export default App;
