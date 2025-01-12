import { environment } from "src/environments/environment";

export interface IMenuItem {
  id?: string;
  src?: { light: string, dark: string };
  route?: string;
  url?: string;
  disabled: boolean;
}

export class MenuItem {
  constructor(public id: string, public src: { light: string, dark: string }, public route: string, public url: string, public disabled = false) { }

  get label(): string {
    return 'menu.' + this.id;
  }

  getIconSrc(dark: boolean): string {
    if (dark && (this.src.dark.startsWith("/")) || (this.src.dark.startsWith("http"))) return this.src.dark;
    if (!dark && (this.src.light.startsWith("/")) || (this.src.light.startsWith("http"))) return this.src.light;
    return environment.base + `assets/icons/${dark ? this.src.dark : this.src.light}`;
  }
}

export class Menu {
  constructor(public items: MenuItem[]) { }
}
