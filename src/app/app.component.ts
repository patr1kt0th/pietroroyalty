import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  initialization = true;

  enLanguage = true;
  nightMode = false;

  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    private dataService: DataService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      await this.dataService.initializeData();
      this.initialization = false;
    });
  }

  ngOnInit() {}

  get isPlatformDesktop(): boolean {
    return this.platform.is('desktop');
  }

  get isPlatformCordova(): boolean {
    return this.platform.is('cordova');
  }

  get isPlatformIOS(): boolean {
    return this.platform.is('ios');
  }

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }

  closeMainMenu(): void {
    this.menuCtrl.close('main-menu');
  }

  closeSearchMenu(): void {
    this.menuCtrl.close('search-menu');
  }
}
