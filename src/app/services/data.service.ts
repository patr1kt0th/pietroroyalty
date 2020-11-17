import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';
import { IPost, Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  static MILLISECONDS_TO_WAIT = 1000;

  languageCode = 'en';

  // tslint:disable-next-line: variable-name
  _posts: Post[];

  constructor(private http: HttpClient, private translateService: TranslateService) {}

  async initializeData(): Promise<Post[]> {
    this.translateService.use(this.languageCode);

    return new Promise((resolve, reject) => {
      // wait to show loader
      setTimeout(() => {
        this.loadPosts().subscribe(
          posts => resolve(posts),
          error => {
            console.log(error);
            resolve(null);
          }
        );
      }, DataService.MILLISECONDS_TO_WAIT);
    });
  }

  switchLanguage(lang: string): void {
    this.languageCode = lang;
  }

  loadPosts(): Observable<Post[]> {
    if (this._posts) {
      return of([...this._posts]);
    }
    return this.http.get<IPost[]>(`/assets/posts/${this.translateService.currentLang}.json`).pipe(
      map(posts => posts.map(post => new Post(post))),
      tap(posts => (this._posts = posts))
    );
  }
}
