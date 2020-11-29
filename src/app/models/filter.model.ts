import { Tag } from './tag.model';

export class Filter {
  active = false;

  constructor(public tags: Tag[], public text?: string) {}

  setTagSelection(tag: string, selected: boolean) {
    this.tags.find(t => t.name === tag).selected = selected;
  }

  get selectedTags(): Tag[] {
    return this.tags.filter(t => t.selected);
  }

  get selectedTagNames(): string[] {
    return this.tags.filter(t => t.selected).map(t => t.name);
  }

  get isActive(): boolean {
    return this.isSearchActive || this.areTagsActive;
  }

  get isSearchActive(): boolean {
    return !!this.text;
  }

  get areTagsActive(): boolean {
    return this.selectedTags.length > 0;
  }
}
