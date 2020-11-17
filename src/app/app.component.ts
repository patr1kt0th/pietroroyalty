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

  navigate(url: string): void {
    this.router.navigateByUrl(url);
  }

  openMainMenu(): void {
    // this.closeSearchMenu();
    // this.menuCtrl.enable(true, 'main-menu');
    // this.menuCtrl.enable(false, 'search-menu');
    // this.menuCtrl.open('menu');
  }

  closeMainMenu(): void {
    // this.menuCtrl.close('menu');
  }

  openSearchMenu(): void {
    // this.closeMainMenu();
    // this.menuCtrl.enable(true, 'search-menu');
    // this.menuCtrl.enable(false, 'main-menu');
    // this.menuCtrl.open('search-menu');
  }

  closeSearchMenu(): void {
    // this.menuCtrl.close('search-menu');
  }
}
