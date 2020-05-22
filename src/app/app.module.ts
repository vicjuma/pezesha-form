import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LogoCommonModule } from './logo-common/logo-common.module'
import { AppRoutingModule } from './app-routing.module';
import {  SharedActionsAttributesModule } from './shared-actions-attributes/shared-actions-attributes.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './logo-common/state';
import { DisplayModule } from './display/display.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DisplayModule,
    AppRoutingModule,
    LogoCommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule,
    SharedActionsAttributesModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
