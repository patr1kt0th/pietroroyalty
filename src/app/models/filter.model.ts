import { Tag } from './tag.model';

export class Filter {
  // tslint:disable-next-line: variable-name
  private _selectedTags: Tag[];
  // tslint:disable-next-line: variable-name
  private _enteredText: string;

  constructor(public tags: Tag[], public text?: string, public active = false) {
    this.update();
  }

  setTagSelection(tag: string, selected: boolean) {
    this.tags.find(t => t.name === tag).selected = selected;
    this.update();
  }

  clearText() {
    this.text = '';
    this._enteredText = '';
  }

  splitText(): string[] {
    return this.text.split(' ');
  }

  get enteredText(): string {
    return this._enteredText;
  }

  get selectedTags(): Tag[] {
    return this._selectedTags;
  }

  get selectedTagNames(): string[] {
    return this._selectedTags.map(t => t.name);
  }

  get isSet(): boolean {
    return this.isSearchActive || this.areTagsActive;
  }

  get isSearchActive(): boolean {
    return !!this.text;
  }

  get areTagsActive(): boolean {
    return this.selectedTags?.length > 0;
  }

  update() {
    this._enteredText = this.text;
    this._selectedTags = this.tags.filter(t => t.selected);
    this.active = this.isSet;
  }
}
