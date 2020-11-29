export class Tag {
  selected = false;

  constructor(public name: string) {}

  get label() {
    return 'tag.' + this.name;
  }
}
