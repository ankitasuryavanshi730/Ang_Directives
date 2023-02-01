import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AttributeComponent } from './attribute/attribute.component';
import { CustomstyleDirective } from './customstyle.directive';
import { CustomDirective } from './custom.directive';


@NgModule({
  declarations: [
    AppComponent,
    AttributeComponent,
    CustomstyleDirective,
    CustomDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
