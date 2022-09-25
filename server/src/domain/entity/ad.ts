export type IAd = {
  id: string;
  gameId: string;
  name: string;
  yearsPlaying: string;
  discord: string;
  weekDays: string;
  hoursStart: string;
  hoursEnd: string;
  useVoiceChannel: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export class Ad {
  readonly id: string;
  readonly gameId: string;
  readonly name: string;
  readonly yearsPlaying: string;
  readonly discord: string;
  readonly weekDays: string;
  readonly hoursStart: string;
  readonly hoursEnd: string;
  readonly useVoiceChannel: boolean;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(props: Omit<"id", IAd>) {
    Object.assign(this, props);
  }
}
