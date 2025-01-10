import { LoadingController, AlertController, Platform, ToastController, MenuController } from '@ionic/angular';

import { TranslateService } from '@ngx-translate/core';

import { DataService } from '../services/data.service';

export abstract class BasePage {
  isLoading = false;
  loading: HTMLIonLoadingElement;

  constructor(
    protected platform: Platform,
    protected menuCtrl: MenuController,
    protected alertCtrl: AlertController,
    protected toastCtrl: ToastController,
    protected loadingCtrl: LoadingController,
    protected translateService: TranslateService,
    protected dataService: DataService
  ) { }

  /* Platform */

  get isPlatformDesktop(): boolean {
    return this.platform.is('desktop');
  }

  get isPlatformCordova(): boolean {
    return this.platform.is('cordova');
  }

  get isPlatformIOS(): boolean {
    return this.platform.is('ios');
  }

  get isXsOrSm(): boolean {
    console.log("width=" + window.innerWidth);
    return Number(window.innerWidth) < 768;
  }

  /* Loader */

  async showLoading() {
    this.loading = await this.loadingCtrl.create({
      message: this.translateService.instant('pleaseWait')
    });
    await this.loading.present();
  }

  async hideLoading() {
    await this.loading.dismiss();
    this.loading = null;
  }

  /* Menu */

  openMainMenu(): void {
    this.menuCtrl.enable(true, 'main-menu');
    this.menuCtrl.open('main-menu');
  }

  closeMainMenu(): void {
    this.menuCtrl.close('main-menu');
  }

  openSearchMenu(): void {
    this.menuCtrl.enable(true, 'search-menu');
    this.menuCtrl.open('search-menu');

    if (this.dataService.searchbar) {
      setTimeout(async () => await this.dataService.searchbar.setFocus(), 500);
    }
  }

  closeSearchMenu(): void {
    this.menuCtrl.close('search-menu');
  }

  /* Alert */

  async showAlert(header: string, text: string) {
    // hide loader
    if (this.loading) {
      await this.loading.dismiss();
    }

    const alert = await this.alertCtrl.create({
      header,
      message: text,
      buttons: [this.translateService.instant('button.ok')]
    });
    await alert.present();
  }

  /* Confirm */

  async showConfirm(header: string, text: string, yesHandler: () => void, noHandler?: () => void) {
    const confirm = await this.alertCtrl.create({
      header,
      message: text,
      buttons: [
        {
          text: this.translateService.instant('button.no'),
          handler: () => {
            if (noHandler) {
              noHandler();
            }
          }
        },
        {
          text: this.translateService.instant('button.yes'),
          handler: () => {
            yesHandler();
          }
        }
      ]
    });
    await confirm.present();
  }

  /* Toast */

  async showToast({
    message,
    color,
    duration
  }: {
    message: string;
    color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'dark' | 'medium' | 'light';
    duration?: number;
  }) {
    const toast = await this.toastCtrl.create({
      message: message,
      color: color,
      // showCloseButton: true,
      // closeButtonText: this.translateService.instant('button.cancel'),
      duration: duration ? duration : 7000
    });
    await toast.present();
  }

  /* Info */

  async showInfoMessageToast(message: string, duration?: number) {
    this.showToast({ message, color: 'secondary', duration });
  }

  async showInfoKeyToast(key: string, params?: any, duration?: number) {
    this.showInfoMessageToast(this.translateService.instant(key, params), duration);
  }

  /* Success */

  async showSuccessMessageToast(message: string, duration?: number) {
    this.showToast({ message, color: 'success', duration });
  }

  async showSuccessKeyToast(key: string, params?: any, duration?: number) {
    this.showSuccessMessageToast(this.translateService.instant(key, params), duration);
  }

  /* Warning */

  async showWarningMessageToast(message: string, duration?: number) {
    this.showToast({ message, color: 'warning', duration });
  }

  async showWarningKeyToast(key: string, params?: any, duration?: number) {
    this.showWarningMessageToast(this.translateService.instant(key, params), duration);
  }

  /* Errors */

  async showErrorMessageToast(message: string, duration?: number) {
    this.showToast({ message, color: 'danger', duration });
  }

  async showErrorKeyToast(key: string, params?: any, duration?: number) {
    this.showErrorMessageToast(this.translateService.instant(key, params), duration);
  }

  async showErrorToast(error: any, params?: any, duration?: number) {
    this.showErrorMessageToast(
      this.translateService.instant('exception.app.message.' + error.error.code, params),
      duration
    );
  }

  /*showErrorAlert(error: any, header?: string, message: string) {
    if (header === undefined) {
      header = this.translateService.instant('error.header');
    }
    if (error != null && error._body != null) {
      const body = JSON.parse(error._body);
      if (body.code != null) {
        this.showAlert(
          this.translateService.instant('error.' + body.code + '.header'),
          this.translateService.instant('error.' + body.code + '.message')
        );
      } else {
        this.showAlert(header, message === undefined ? error : message);
      }
    } else {
      this.showAlert(header, message === undefined ? error : message);
    }
  }*/

  /*handleError(error?: any, message: string) {
    if (error === undefined) {
      error = this.dataService.getError(false);
    } else if (error != null) {
      this.dataService.setError(error, message);
    }
    if (error != null) {
      // hide loader
      if (this.loading != null) {
        this.loading.dismiss();
      }
      if (this.dataService.isForceUpdateError(error)) {
        // TODO: redirect to the init page
      } else if (this.dataService.isMaintenanceError(error)) {
        // TODO: redirect to the init page
      } else if (this.dataService.isUnauthorizedError(error)) {
        // TODO: redirect to the login page where it will be shown
      } else {
        // clear the last error and show alert
        this.dataService.setError(null);
        this.showErrorAlert(error);
      }
    }
  }*/
}
