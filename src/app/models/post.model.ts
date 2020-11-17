export interface IPost {
  id: string;
  image: string;
  title: string;
  date: string | Date;
  text: string | string[];
  tags: string[];
}

export class Post {
  id: string;
  image: string;
  title: string;
  date: string | Date;
  text: string[];
  tags: string[];

  constructor(post: IPost) {
    this.id = post.id;
    this.image = post.image;
    this.title = post.title;
    if (post.date instanceof Date) {
      this.date = post.date;
    } else {
      this.date = new Date(post.date);
    }
    if (Array.isArray(post.text)) {
      this.text = post.text;
    } else {
      this.text = [post.text];
    }
    this.tags = post.tags;
  }

  get imageSrc(): string {
    return `/assets/images/${this.image}`;
  }

  hasTags(tags: string[]): boolean {
    return !!this.tags.find(t => tags.includes(t));
  }

  hasTag(tag: string): boolean {
    return this.hasTags([tag]);
  }
}
