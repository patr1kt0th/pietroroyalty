import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { BlogPageRoutingModule } from './blog-routing.module';
import { BlogPage } from './blog.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TranslateModule, SharedModule, BlogPageRoutingModule],
  declarations: [BlogPage]
})
export class BlogPageModule {}
