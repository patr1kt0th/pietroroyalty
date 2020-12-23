import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertController, LoadingController, MenuController, Platform, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { BasePage } from 'src/app/shared/base.page';
import { Post } from 'src/app/models/post.model';
import { DataService } from 'src/app/services/data.service';
import { Filter } from 'src/app/models/filter.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage extends BasePage implements OnInit, OnDestroy {
  postsSubscription: Subscription;
  posts: Post[];

  filterSubscription: Subscription;
  filter: Filter;

  constructor(
    protected menuCtrl: MenuController,
    protected platform: Platform,
    protected alertCtrl: AlertController,
    protected toastCtrl: ToastController,
    protected loadingCtrl: LoadingController,
    protected translateService: TranslateService,
    protected dataService: DataService
  ) {
    super(platform, menuCtrl, alertCtrl, toastCtrl, loadingCtrl, translateService, dataService);
  }

  ngOnInit() {
    this.postsSubscription = this.dataService.postsObservable.subscribe(posts => {
      this.posts = posts;
    });

    this.filterSubscription = this.dataService.filterObservable.subscribe(filter => (this.filter = filter));
  }

  ngOnDestroy(): void {
    if (this.postsSubscription) {
      this.postsSubscription.unsubscribe();
    }
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  get locale(): string {
    return this.dataService.locale;
  }

  filterByTag(tag: string) {
    this.filter.setTagSelection(tag, true);
    this.dataService.reloadPosts();
  }

  removeTagFilter(tag: string) {
    this.filter.setTagSelection(tag, false);
    this.dataService.reloadPosts();
  }

  removeTextFilter() {
    this.filter.clearText();
    this.dataService.reloadPosts();
  }

  refresh(event) {
    this.dataService.reloadPosts();
    // setTimeout(() => {
    event.target.complete();
    // }, DataService.MILLISECONDS_TO_WAIT);
  }
}
