import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
} from '@angular/core';
import { NgStyle } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import {
  LogoComponent,
  AsideComponent,
  ContactComponent,
  HobbiesComponent,
  InformationComponent,
  SoftwareSkillsComponent,
} from '@resume/components';
import { InformationSection, InformationSet } from '@resume/interfaces';

@Component({
  standalone: true,
  selector: 'aa-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgStyle,
    TranslateModule,
    LogoComponent,
    AsideComponent,
    ContactComponent,
    HobbiesComponent,
    InformationComponent,
    SoftwareSkillsComponent,
  ],
})
export class HeaderComponent {
  infos: InformationSet = {};

  private _cdr = inject(ChangeDetectorRef);
  private _translator = inject(TranslateService);

  constructor() {
    this._translator
      .get('INFORMATION')
      .pipe(takeUntilDestroyed())
      .subscribe((data: InformationSection[]) => {
        let _infos: InformationSet = {};
        console.log('[_translator] data: ', data);
        data.forEach((_item) => {
          const _anchors = _item.ANCHORS.split(',');
          _infos = {
            ..._infos,
            ..._anchors
              .map((_anchor) => {
                const _descriptions: string[] = [];
                const _found = _infos[_anchor];
                if (_found) {
                  _descriptions.push(..._found);
                }
                _descriptions.push(_item.DESCRIPTION);
                return { [_anchor]: _descriptions } as InformationSet;
              })
              .reduce(
                (_result, _item) => ({ ..._result, ..._item }),
                {} as InformationSet
              ),
          };
        });
        this.infos = _infos;
        this._cdr.markForCheck();
      });
  }
}
