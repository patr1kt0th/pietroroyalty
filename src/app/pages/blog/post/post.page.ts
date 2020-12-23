import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  MenuController,
  Platform,
  AlertController,
  ToastController,
  LoadingController,
  PopoverController,
  ActionSheetController
} from '@ionic/angular';
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
    protected platform: Platform,
    protected menuCtrl: MenuController,
    protected alertCtrl: AlertController,
    protected toastCtrl: ToastController,
    protected loadingCtrl: LoadingController,
    protected popoverCtrl: PopoverController,
    protected actionSheetCtrl: ActionSheetController,
    protected translateService: TranslateService,
    protected router: Router,
    protected route: ActivatedRoute,
    protected dataService: DataService
  ) {
    super(platform, menuCtrl, alertCtrl, toastCtrl, loadingCtrl, translateService, dataService);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      // setTimeout(() => {
      this.post = this.dataService.getPost(id);
      // }, DataService.MILLISECONDS_TO_WAIT);
    });
  }

  async share(ev: Event) {
    // const popover = await this.popoverCtrl.create({
    //   component: PopoverComponent,
    //   cssClass: 'my-custom-class',
    //   event: ev,
    //   translucent: true
    // });
    // await popover.present();

    const actionSheet = await this.actionSheetCtrl.create({
      header: location.href,
      cssClass: 'action-sheet',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Facebook clicked');
          }
        },
        {
          text: 'Twitter',
          icon: 'logo-twitter',
          handler: () => {
            console.log('Twitter clicked');
          }
        },
        {
          text: 'Instagram',
          icon: 'logo-instagram',
          handler: () => {
            console.log('Instagram clicked');
          }
        },
        {
          text: this.translateService.instant('button.close'),
          icon: 'close',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    await actionSheet.present();
  }
}
