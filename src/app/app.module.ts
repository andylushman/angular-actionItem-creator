import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ActionItemComponent } from './action-item/action-item.component';
import { LinkedElementDropdownComponent } from './linked-element-dropdown/linked-element-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    ActionItemComponent,
    LinkedElementDropdownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
