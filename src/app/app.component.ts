import { Component, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { MatMenuTrigger } from '@angular/material';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  openMenu(){
    this.trigger.openMenu();
  }

}
