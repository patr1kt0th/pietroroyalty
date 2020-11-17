import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController, LoadingController, MenuController, Platform, ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

import { BasePage } from 'src/app/shared/base.page';
import { Post } from 'src/app/models/post.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss']
})
export class PostsPage extends BasePage implements OnInit {
  posts: Post[];

  constructor(
    protected menuCtrl: MenuController,
    protected platform: Platform,
    protected alertCtrl: AlertController,
    protected toastCtrl: ToastController,
    protected loadingCtrl: LoadingController,
    protected router: Router,
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

  showPost(id: string) {
    this.router.navigate(['/post', id]);
  }
}
