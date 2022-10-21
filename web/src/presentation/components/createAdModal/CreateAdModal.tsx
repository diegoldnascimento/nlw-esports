import { useState, FormEvent } from 'react';
import axios from 'axios';
import * as Dialog from '@radix-ui/react-dialog';
import * as Checkbox from '@radix-ui/react-checkbox';
import * as Select from '@radix-ui/react-select';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import { GameController, Check, CaretDown } from "phosphor-react";
import { Input } from "../form/input/Input";
import { GetGameOutput } from "../../../App";

type CreateAdModalProps = {
  games: GetGameOutput[]
};

export interface PostGameOutput { }
export interface PostGameInput { }

export const CreateAdModal = ({ games }: CreateAdModalProps) => {
  const [weekDays, setWeekDays] = useState<string[]>([]);
  const [useVoiceChannel, setUseVoiceChannel] = useState<boolean>(false);

  const convertHoursToMinutes = (time: string) => {
    const hours = time.split(":")[0];
    const minutes = time.split(":")[1];

    return (Number(hours) * 60) + Number(minutes);
  }

  const handleCreateAd = async (event: FormEvent) => {
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const response = await axios.post(`http://localhost:3000/v1/games/${data.game}/ads`, {
      "name": data.name,
      "yearsPlaying": Number(data.yearsPlaying),
      "discord": data.discord,
      "weekDays": weekDays.join(","),
      "hoursStart": convertHoursToMinutes(String(data.hoursStart)),
      "hoursEnd": convertHoursToMinutes(String(data.hoursEnd)),
      "useVoiceChannel": useVoiceChannel ? "1" : "0"
    });

    console.log({ response })

    event.preventDefault();
  }

  return <Dialog.Portal>
    <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
    <Dialog.Content className="fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25">
      <Dialog.Title className="text-4xl text-white font-black">Publique um anúncio</Dialog.Title>
      <Dialog.Description>
        <form onSubmit={handleCreateAd} className="mt-8 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="game" className="font-semibold">Qual o game?</label>
            <Select.Root name="game">
              <Select.Trigger className="bg-zinc-900 py-3 px-4 rounded text-sm flex justify-between">
                <Select.Value placeholder="Selecione o game que deseja jogar" className="placeholder:text-zinc-500 appearance-none" />
                <Select.Icon>
                  <CaretDown size={16} />
                </Select.Icon>
              </Select.Trigger>
              <Select.Portal className="bg-zinc-900 text-white p-5">
                <Select.Content>
                  <Select.Viewport>
                    {games.map((game: GetGameOutput) => {
                      return <Select.Item key={game.id} value={game.id}>
                        <Select.ItemText>
                          {game.title}
                        </Select.ItemText>
                      </Select.Item>
                    })}
                  </Select.Viewport>
                </Select.Content>
              </Select.Portal>
            </Select.Root>

          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="name">Seu nome (ou nickname)</label>
            <Input type="text" name="name" id="name" placeholder="Como te chamam dentro do game?" />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="yearsPlaying">Joga há quantos anos?<label />
              </label>

              <Input type="text" name="yearsPlaying" id="yearsPlaying" placeholder="Tudo bem ser  ZERO" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="discord">Qual seu Discord?</label>
              <Input type="text" id="discord" name="discord" placeholder="Usuario#0000" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <div>
                <label htmlFor="weekDays">Quando costuma jogar?</label>

                <div>
                  <ToggleGroup.Root type="multiple" value={weekDays} onValueChange={setWeekDays} className="grid grid-cols-4 gap-2">
                    <ToggleGroup.Item value="0" title="Domingo" className={`w-8 h-8 rounded ${weekDays.includes('0') ? 'bg-violet-500' : 'bg-zinc-900'}`}>D</ToggleGroup.Item>
                    <ToggleGroup.Item value="1" title="Segunda" className={`w-8 h-8 rounded ${weekDays.includes('1') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                    <ToggleGroup.Item value="2" title="Terça" className={`w-8 h-8 rounded ${weekDays.includes('2') ? 'bg-violet-500' : 'bg-zinc-900'}`}>T</ToggleGroup.Item>
                    <ToggleGroup.Item value="3" title="Quarta" className={`w-8 h-8 rounded ${weekDays.includes('3') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                    <ToggleGroup.Item value="4" title="Quinta" className={`w-8 h-8 rounded ${weekDays.includes('4') ? 'bg-violet-500' : 'bg-zinc-900'}`}>Q</ToggleGroup.Item>
                    <ToggleGroup.Item value="5" title="Sexta" className={`w-8 h-8 rounded ${weekDays.includes('5') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                    <ToggleGroup.Item value="6" title="Sábado" className={`w-8 h-8 rounded ${weekDays.includes('6') ? 'bg-violet-500' : 'bg-zinc-900'}`}>S</ToggleGroup.Item>
                  </ToggleGroup.Root>
                </div>
              </div>
            </div>
            <div>

              <label htmlFor="hoursStart">Qual horário do dia?</label>
              <div className="grid grid-cols-2 gap-2">
                <Input id="hoursStart" name="hoursStart" type="time" placeholder="De" />
                <Input id="hoursEnd" name="hoursEnd" type="time" placeholder="Até" />
              </div>
            </div>
          </div>
          <div className="mt-2 flex gap-2 text-sm">
            <Checkbox.Root onCheckedChange={(checked) => {
              if (checked === true) {
                setUseVoiceChannel(true)
              } else {
                setUseVoiceChannel(false)
              }
            }} name="useVoiceChannel" className="w-6 h-6 p-1 rounded-md bg-zinc-900">
              <Checkbox.Indicator>
                <Check className="w-4 h-4 text-emerald-400" />
              </Checkbox.Indicator>
            </Checkbox.Root>
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

};
