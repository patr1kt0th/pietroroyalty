export interface Tag {
  value: string;
  label: string;
  selected: boolean;
}

export class Filter {
  search: string;
  tags: Tag[];
}
