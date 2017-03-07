import { Observable } from 'rxjs';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RevealingPasswordInputComponent} from "./components/revealing-password-input/revealing-password-input";

import { MyProvider } from './providers/my-provider';


@NgModule({
  declarations: [
    RevealingPasswordInputComponent
  ],
  providers: [ MyProvider ],
  exports: [
    RevealingPasswordInputComponent
  ],
  imports: [
    BrowserModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ExtendedComponentsModule {}
