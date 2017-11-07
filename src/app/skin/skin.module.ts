import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatButtonModule, MatIconModule, MatCheckboxModule, MatSidenavModule, MatListModule, MatGridListModule,MatMenuModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatGridListModule, MatMenuModule, MatCardModule
  ],
  exports: [ BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatIconModule,  MatToolbarModule, MatSidenavModule, MatListModule, MatGridListModule, MatMenuModule, MatCardModule],
  declarations: []
})
export class SkinModule { }
