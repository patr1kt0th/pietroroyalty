import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { registerLocaleData } from '@angular/common';
import enLocale from '@angular/common/locales/en-GB';
import skLocale from '@angular/common/locales/sk';
import { getUserLocale } from 'get-user-locale';

import { IonSearchbar, MenuController, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { DataService } from './services/data.service';
import { Filter } from './models/filter.model';
import { Subscription } from 'rxjs';
import { Menu } from './models/menu.model';

declare const gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  initialization = true;

  @ViewChild('searchbar') searchbar: IonSearchbar;
  menu: Menu;

  isEnLanguage = true;
  darkMode = false;

  filter: Filter = new Filter(null);
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

      // this.router.events.subscribe((event) => {
      //   if (event instanceof NavigationEnd) {
      //     gtag('config', 'UA-87277907-1', { 'page_path': event.urlAfterRedirects });
      //   }
      // });

      await this.dataService.initializeData(getUserLocale());
      this.menu = this.dataService.menu;
      this.isEnLanguage = this.dataService.isEnLanguage;
      this.filterSubscription = this.dataService.filterObservable.subscribe(filter => (this.filter = filter));

      // set reference to IonSearchbar
      this.dataService.searchbar = this.searchbar;

      this.initialization = false;
    });
  }

  ngOnInit() {
    registerLocaleData(enLocale, 'en-GB');
    registerLocaleData(skLocale, 'sk-SK');

    this.darkMode = document.body.classList.contains('dark');
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
    // this.languageChanged();
  }

  search(): void {
    this.dataService.reloadPosts();
  }

  closeSearchMenu(): void {
    this.menuCtrl.close('search-menu');
  }

  searchMenuClosed(): void {
    this.search();
  }

  modeChanged() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('dark', this.darkMode);
  }

  switchLanguage() {
    this.isEnLanguage = !this.isEnLanguage;
    this.languageChanged();
  }

  languageChanged() {
    this.dataService.language = this.isEnLanguage ? 'en' : 'sk';
    if (this.dataService.languageChanged) {
      this.dataService.reloadPosts();
    }
  }
}
