import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { PostPageRoutingModule } from './post-routing.module';
import { PostPage } from './post.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, TranslateModule, SharedModule, PostPageRoutingModule],
  declarations: [PostPage]
})
export class PostPageModule {}
