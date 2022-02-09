import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, forkJoin, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';

import { IPost, Post } from '../models/post.model';
import { Filter } from '../models/filter.model';
import { Tag } from '../models/tag.model';
import { Menu, IMenuItem, MenuItem } from '../models/menu.model';
import { registerLocaleData } from '@angular/common';
import { IonSearchbar } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static MILLISECONDS_TO_WAIT = 1000;

  // tslint:disable-next-line: variable-name
  private _menu: Menu;

  // tslint:disable-next-line: variable-name
  private _language = 'en';
  // tslint:disable-next-line: variable-name
  private _languageChanged = false;

  // tslint:disable-next-line: variable-name
  private _posts: BehaviorSubject<Post[]>;
  // tslint:disable-next-line: variable-name
  private _filter: BehaviorSubject<Filter>;

  searchbar: IonSearchbar;

  constructor(private http: HttpClient, private translateService: TranslateService) {
    this._posts = new BehaviorSubject(null);
    this._filter = new BehaviorSubject(null);
  }

  get menu() {
    return this._menu;
  }

  get language(): string {
    return this._language;
  }

  set language(lang: string) {
    if (this._language !== lang) {
      this._languageChanged = true;
      localStorage.setItem('pietroroyalty-language', lang);
    }
    this._language = lang;
    this.translateService.use(lang);
  }

  get languageChanged(): boolean {
    const languageChanged = this._languageChanged;
    // reset state
    this._languageChanged = false;
    return languageChanged;
  }

  get isEnLanguage(): boolean {
    return this.language === 'en';
  }

  get locale(): string {
    const locale = this.language === 'sk' ? 'sk-SK' : 'en-GB';
    return locale;
  }

  private get filter(): Filter {
    return this._filter.value;
  }

  get filterObservable(): Observable<Filter> {
    return this._filter.asObservable();
  }

  async initializeData(locale: string): Promise<void> {
    this.translateService.setDefaultLang('en');
    
    const storedLanguage = localStorage.getItem('pietroroyalty-language');
    if (storedLanguage) {
      this.language = storedLanguage;
    } else {
      this.language = locale.substring(0, 2);
    }

    return this.refreshData();
  }

  async refreshData(): Promise<void> {
    this._posts.next(null);
    this._filter.next(null);

    return new Promise((resolve, reject) => {
      // wait to show loader
      // setTimeout(() => {
      forkJoin([this.loadMenu(), this.loadPosts()]).subscribe(
        () => resolve(),
        error => {
          console.log(error);
          resolve(null);
        }
      );
      // }, DataService.MILLISECONDS_TO_WAIT);
    });
  }

  private get posts(): Post[] {
    return this._posts.value;
  }

  get postsObservable(): Observable<Post[]> {
    return this._posts.asObservable();
  }

  private loadMenu(): Observable<Menu> {
    return this.http.get<{ menu: IMenuItem[]; social: MenuItem[] }>(environment.base + `assets/data/menu.json`).pipe(
      map(
        items =>
          new Menu(
            items.menu.map(i => new MenuItem(i.id, i.route, i.url)),
            items.social.map(i => new MenuItem(i.id, i.route, i.url))
          )
      ),
      tap(menu => (this._menu = menu))
    );
  }

  private loadPosts(): Observable<Post[]> {
    return this.http.get<IPost[]>(environment.base + `assets/data/blog.${this.translateService.currentLang}.json`).pipe(
      map(posts => posts.map(post => new Post(post))),
      tap(posts => {
        this._posts.next(posts);

        // create or adapt filter
        let filter: Filter = this.filter;
        let tags: Tag[];
        let text: string;

        if (filter) {
          tags = filter.tags;
          text = filter.text;
        } else {
          // get used tags
          const usedTags = new Set<string>();
          posts.forEach(p => p.tags.forEach(t => usedTags.add(t.name)));

          tags = [...usedTags].map(t => new Tag(t));
        }

        // sort tags
        tags = tags.sort((t1, t2) =>
          this.translateService.instant(t1.label).localeCompare(this.translateService.instant(t2.label))
        );

        filter = new Filter(tags, text);

        // set filter
        this._filter.next(filter);
      })
    );
  }

  reloadPosts() {
    this.loadPosts().subscribe(posts => {
      let filteredPosts = posts;
      if (this.filter.areTagsActive) {
        filteredPosts = filteredPosts.filter(post => post.hasTags(this.filter.selectedTagNames));
      }
      // if (this.filter.isSearchActive) {
      //   const text = this.filter.text.toLocaleLowerCase();
      //   filteredPosts = filteredPosts.filter(post => post.hasText(text));
      // }
      if (this.filter.isSearchActive) {
        filteredPosts = filteredPosts.filter(post => post.hasTexts(this.filter.splitText()));
      }
      this._posts.next(filteredPosts);
    });
  }

  getPost(id: string) {
    return this.posts.find(p => p.id === id);
  }
}
