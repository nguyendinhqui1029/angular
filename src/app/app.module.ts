import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//Menu
import {MENU} from './Widgets/Menu/m_menu.component';
//Header
import {HEADER} from './Widgets/Header/h_header.component';
@NgModule({
  declarations: [
    AppComponent,MENU,HEADER
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
