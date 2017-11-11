import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {Title, Meta} from "@angular/platform-browser"; 
@Component({
  selector: 'contact-view',
  templateUrl: './contact.html'
})
export class ContactComponent {
  constructor( private title: Title, meta: Meta) { 
    this.title.setTitle('Contact Us');
    meta.addTags([
      { name: 'keywords', content: 'samariterwatchman, africa security, security agancies in africa, security guards africa, security services'},
      { name: 'description', content: 'For inquiry on Africa security services, contact us.' }
    ]);
  }
}
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ContactComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
