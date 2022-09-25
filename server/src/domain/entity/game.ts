import type { IAd } from "../entity/ad";

export type IGame = {
  id: string;
  title: string;
  backgroundImageUrl: string;
  ads?: IAd[];
};

export class Game {
  readonly id: string;
  readonly title: string;
  readonly backgroundImageUrl: string;
  readonly ads: IAd[];

  constructor(props: Omit<"id", IGame>) {
    Object.assign(this, props);
  }
}
