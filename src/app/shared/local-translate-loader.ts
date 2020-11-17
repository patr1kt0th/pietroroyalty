import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

import { enTranslations } from 'src/assets/i18n/en';
import { skTranslations } from 'src/assets/i18n/sk';

export class LocalTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    if (lang === 'sk') {
      return of(skTranslations);
    } else {
      return of(enTranslations);
    }
  }
}
