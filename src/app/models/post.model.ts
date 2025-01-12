import { environment } from 'src/environments/environment';
import { Tag } from './tag.model';

export interface IPost {
  id: string;
  preview?: boolean;
  images: string | string[];
  title: string;
  date: string | Date;
  text: string | string[];
  instagram?: string[];
  slides?: boolean;
  photos?: string[];
  videos?: string[];
  tags: string[];
}

export class Post {
  id: string;
  preview = false;
  images: string[];
  title: string;
  date: string | Date;
  text: string[];
  instagram?: string[];
  slides = false;
  photos?: string[];
  videos?: string[];
  tags: Tag[];

  constructor(post: IPost) {
    this.id = post.id;
    if (post.preview) {
      this.preview = post.preview;
    }
    if (Array.isArray(post.images)) {
      this.images = post.images;
    } else {
      this.images = [post.images];
    }
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
    this.instagram = post.instagram;
    if (post.slides) {
      this.slides = post.slides;
    }
    this.photos = post.photos;
    this.videos = post.videos;
    this.tags = post.tags.map(t => new Tag(t));
  }

  get imageSrc(): string {
    return environment.base + `assets/images/${this.images[0]}`;
  }

  getImageSrc(index: number): string {
    return environment.base + `assets/images/${this.images[index]}`;
  }

  getPhotoSrc(index: number): string {
    return environment.base + `assets/photos/${this.photos[index]}`;
  }

  hasTags(tags: string[]): boolean {
    return !!this.tags.find(t => tags.includes(t.name));
  }

  hasTag(tag: string): boolean {
    return this.hasTags([tag]);
  }

  hasTexts(texts: string[]): boolean {
    let found = false;
    if (texts.find(t => this.title.toLocaleLowerCase().includes(t.toLocaleLowerCase()))) {
      found = true;
    }
    if (!found) {
      texts.forEach(t => {
        if (this.text.find(text => text.toLocaleLowerCase().includes(t.toLocaleLowerCase()))) {
          found = true;
        }
      });
    }
    return found;
  }

  hasText(text: string): boolean {
    return this.hasTexts([text]);
  }
}
