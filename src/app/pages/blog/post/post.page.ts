import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MenuController, Platform, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { Post } from 'src/app/models/post.model';
import { DataService } from 'src/app/services/data.service';
import { BasePage } from 'src/app/shared/base.page';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss']
})
export class PostPage extends BasePage implements OnInit {
  post: Post;

  constructor(
    protected menuCtrl: MenuController,
    protected platform: Platform,
    protected alertCtrl: AlertController,
    protected toastCtrl: ToastController,
    protected loadingCtrl: LoadingController,
    protected router: Router,
    protected route: ActivatedRoute,
    protected translateService: TranslateService,
    protected dataService: DataService
  ) {
    super(platform, menuCtrl, alertCtrl, toastCtrl, loadingCtrl, translateService);
  }

  ngOnInit() {
    this.loadPosts();
  }

  private loadPosts() {
    const id = this.route.snapshot.params.id;
    this.dataService.loadPosts().subscribe(posts => {
      this.post = posts.find(p => p.id === id);
      // this.route.params.subscribe((params: Params) => {
      // });
    });
  }

  getTag(tag: string) {
    return this.translateService.instant('tag.' + tag);
  }

  showPost(id: string) {
    this.router.navigate(['/post', id]);
  }
}
