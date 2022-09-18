export type IAd = {
  id: string;
  name: string;
  createdAt: Date;
};

export class Ad {
  readonly id: string;
  readonly name: string;
  readonly createdAt: Date;

  constructor(props: Omit<IAd, "id">) {
    Object.assign(this, props);
  }
}
