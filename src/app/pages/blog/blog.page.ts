import { Component, OnInit } from '@angular/core';

import { AlertController, LoadingController, MenuController, Platform, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { BasePage } from 'src/app/shared/base.page';
import { Post } from 'src/app/models/post.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})
export class BlogPage extends BasePage implements OnInit {
  posts: Post[];

  constructor(
    protected menuCtrl: MenuController,
    protected platform: Platform,
    protected alertCtrl: AlertController,
    protected toastCtrl: ToastController,
    protected loadingCtrl: LoadingController,
    protected translateService: TranslateService,
    protected dataService: DataService
  ) {
    super(platform, menuCtrl, alertCtrl, toastCtrl, loadingCtrl, translateService);
  }

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts() {
    this.dataService.loadPosts().subscribe(posts => (this.posts = posts));
  }

  getTag(tag: string) {
    return this.translateService.instant('tag.' + tag);
  }

  filterByTag(tag: string) {
    console.log('filter by tag', tag);
  }

  refresh(event) {
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
}
