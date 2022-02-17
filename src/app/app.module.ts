import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { NumBoxComponent } from './num-box/num-box.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ChangeableNumBoxComponent } from './changeable-num-box/changeable-num-box.component';

@NgModule({
  declarations: [
    AppComponent,
    NumBoxComponent,
    ChangeableNumBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
