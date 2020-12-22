export interface IMenuItem {
  id: string;
  route?: string;
  url?: string;
  disabled: boolean;
}

export class MenuItem {
  constructor(public id: string, public route: string, public url: string, public disabled = false) {}

  get label(): string {
    return 'menu.' + this.id;
  }
}

export class Menu {
  constructor(public menu: MenuItem[], public social: MenuItem[]) {}
}
