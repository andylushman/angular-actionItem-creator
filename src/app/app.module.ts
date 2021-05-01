import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ActionItemComponent } from './action-item/action-item.component';
import { ToggleElementComponent } from './toggle-element/toggle-element.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    ActionItemComponent,
    ToggleElementComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
