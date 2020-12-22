import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import enLocale from '@angular/common/locales/en-GB';
import skLocale from '@angular/common/locales/sk';
import { getUserLocale } from 'get-user-locale';

import { MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { DataService } from './services/data.service';
import { Filter } from './models/filter.model';
import { Subscription } from 'rxjs';
import { Menu } from './models/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  initialization = true;

  menu: Menu;

  enLanguage = true;
  nightMode = false;

  filter: Filter;
  filterSubscription: Subscription;

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

      await this.dataService.initializeData(getUserLocale());
      this.menu = this.dataService.menu;
      this.enLanguage = this.dataService.isEnLanguage;
      this.filterSubscription = this.dataService.filterObservable.subscribe(filter => (this.filter = filter));

      this.initialization = false;
    });
  }

  ngOnInit() {
    registerLocaleData(enLocale, 'en-GB');
    registerLocaleData(skLocale, 'sk-SK');

    this.nightMode = document.body.classList.contains('dark');
  }

  ngOnDestroy(): void {
    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

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

  mainMenuClosed(): void {
    this.dataService.language = this.enLanguage ? 'en' : 'sk';
    if (this.dataService.languageChanged) {
      this.dataService.reloadPosts();
    }
  }

  closeSearchMenu(): void {
    this.menuCtrl.close('search-menu');
  }

  searchMenuClosed(): void {
    this.dataService.reloadPosts();
  }

  modeChanged() {
    this.nightMode = !this.nightMode;
    document.body.classList.toggle('dark', this.nightMode);
  }
}
