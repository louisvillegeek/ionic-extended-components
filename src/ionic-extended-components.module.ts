import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RevealingPasswordInputComponent} from "./components/revealing-password-input/revealing-password-input";

import {IonicModule} from "ionic-angular";


@NgModule({
  declarations: [
    RevealingPasswordInputComponent,
  ],
  providers: [  ],
  exports: [
    RevealingPasswordInputComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ExtendedComponentsModule {}
