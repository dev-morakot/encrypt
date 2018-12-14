import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { AppComponent } from './app.component';

import { EncryptionService } from './services/encryption.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    EncryptionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
