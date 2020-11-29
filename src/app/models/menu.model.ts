export interface IMenuItem {
  id: string;
  url: string;
}

export class MenuItem {
  constructor(public id: string, public url: string, public label: string) {}
}

export class Menu {
  constructor(public items: MenuItem[]) {}
}
