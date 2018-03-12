import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CiscoLoaderAlternateComponent } from './cisco-loader-alternate/cisco-loader-alternate.component';
import { CiscoLoaderFillComponent } from './cisco-loader-fill/cisco-loader-fill.component';
import { CiscoLoaderFlipComponent } from './cisco-loader-flip/cisco-loader-flip.component';
import { CiscoLoaderTurnComponent } from './cisco-loader-turn/cisco-loader-turn.component';
import { CiscoLoaderFloatComponent } from './cisco-loader-float/cisco-loader-float.component';
import { CiscoLoaderBounceComponent } from './cisco-loader-bounce/cisco-loader-bounce.component';

@NgModule({
  declarations: [
    AppComponent,
    CiscoLoaderAlternateComponent,
    CiscoLoaderFillComponent,
    CiscoLoaderFlipComponent,
    CiscoLoaderTurnComponent,
    CiscoLoaderFloatComponent,
    CiscoLoaderBounceComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
