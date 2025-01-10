import { Component, OnInit, ViewChild } from '@angular/core';
// import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  MenuController,
  Platform,
  AlertController,
  ToastController,
  LoadingController,
  PopoverController,
  ActionSheetController,
  IonSlides
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
  postId: any;
  post: Post;
  // trustedUrls: Map<string, SafeResourceUrl>;

  @ViewChild('slider') slider: IonSlides;

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
    protected dataService: DataService,
    // private domSanitizer: DomSanitizer
  ) {
    super(platform, menuCtrl, alertCtrl, toastCtrl, loadingCtrl, translateService, dataService);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.postId = id;
      // setTimeout(() => {
      this.post = this.dataService.getPost(id);
      // this.trustedUrls = new Map<string, SafeResourceUrl>();
      // this.post.videos.forEach(url => this.trustedUrls.set(url, this.domSanitizer.bypassSecurityTrustUrl(url)));
      // }, DataService.MILLISECONDS_TO_WAIT);
    });
  }

  goToHomePage() {
    this.router.navigateByUrl("/");
  }

  slideNext() {
    this.slider.isEnd().then((isEnd) => {
      if (isEnd) {
        this.slider.slideTo(0);
      } else {
        this.slider.slideNext();
      }
    });
  }

  slidePrev() {
    this.slider.isBeginning().then((isBeginning) => {
      if (isBeginning) {
        this.slider.length().then((length) => this.slider.slideTo(length - 1));
      } else {
        this.slider.slidePrev();
      }
    })
  }

  get isEnLanguage(): boolean {
    return this.dataService.language === 'en';
  }

  get locale(): string {
    return this.dataService.locale;
  }

  changeLanguage() {
    this.dataService.language = this.dataService.language === 'en' ? 'sk' : 'en';
    this.dataService.loadPosts().subscribe(() => {
      this.post = this.dataService.getPost(this.postId);
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
          handler: () => { }
        }
      ]
    });
    await actionSheet.present();
  }
}
