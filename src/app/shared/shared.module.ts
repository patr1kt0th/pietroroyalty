import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { FooterComponent } from '../components/footer/footer.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [FooterComponent, SafePipe],
  imports: [IonicModule],
  exports: [FooterComponent, SafePipe]
})
export class SharedModule {}
