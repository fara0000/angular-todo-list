import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// import { AuthGuardService } from './guards';
import { metaReducers, reducers, effects } from './store';

// это главный фойл в которм уже импортируется эффекты и главный объект состояния приложения reducers и как конфиг принимает
// принимает metaReducers а это метод который логирует все наши action и statex

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    CommonModule,
  ],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule ){
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
