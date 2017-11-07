import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css']
  
})
export class HomeComponent implements OnInit {
  public message: string;

  constructor() {}

  ngOnInit() {
    this.message = 'Hello';
  }
}