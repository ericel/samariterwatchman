import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router';
import {Title, Meta} from "@angular/platform-browser"; 

@Component({
  selector: 'services',
  templateUrl: './services.html'
})
export class ServicesComponent {
  constructor( private title: Title, meta: Meta) { 
    this.title.setTitle('Services');
    meta.addTags([
      { name: 'keywords', content: 'samariterwatchman, africa security, security agancies in africa, security guards africa, security services'},
      { name: 'description', content: 'With Samariterwatchman, Africa is still a place you will come and do business without being defrauded.' }
    ]);
  }
}
@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: ServicesComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [ServicesComponent]
})
export class ServicesModule { }
