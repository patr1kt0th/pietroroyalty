import { Tag } from './tag.model';

export class Filter {
  constructor(public tags: Tag[], public text?: string) {}

  setTagSelection(tag: string, selected: boolean) {
    this.tags.find(t => t.name === tag).selected = selected;
  }

  clearText() {
    this.text = '';
  }

  splitText(): string[] {
    return this.text.split(' ');
  }

  get selectedTags(): Tag[] {
    return this.tags.filter(t => t.selected);
  }

  get selectedTagNames(): string[] {
    return this.selectedTags.map(t => t.name);
  }

  get active(): boolean {
    return this.isSearchActive || this.areTagsActive;
  }

  get isSearchActive(): boolean {
    return !!this.text;
  }

  get areTagsActive(): boolean {
    return this.selectedTags?.length > 0;
  }
}
