import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [AppComponent, AngularFormsComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, CommonModule],
})
export class AppModule {}
