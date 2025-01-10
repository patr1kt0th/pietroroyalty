export interface IMenuItem {
  id?: string;
  src?: { day: string, night: string };
  route?: string;
  url?: string;
  disabled: boolean;
}

export class MenuItem {
  constructor(public id: string, public src: { day: string, night: string }, public route: string, public url: string, public disabled = false) { }

  get label(): string {
    return 'menu.' + this.id;
  }
}

export class Menu {
  constructor(public items: MenuItem[]) { }
}
