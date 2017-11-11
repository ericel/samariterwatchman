import { NgModule, Component } from '@angular/core';
import {RouterModule} from '@angular/router'
import {Title, Meta} from "@angular/platform-browser"; 
@Component ({
  selector: 'security',
  templateUrl: './security.html'
})
export class SecurityComponent {
  constructor( private title: Title, meta: Meta) { 
    this.title.setTitle('Services');
    meta.addTags([
      { name: 'keywords', content: 'samariterwatchman, africa security, security agancies in africa, security guards africa, security services'},
      { name: 'description', content: 'We provide the best of security services in Africa. Just register with us and fraud is a thing of the past.' }
    ]);
  }
}
@NgModule({
  declarations: [SecurityComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: SecurityComponent, pathMatch: 'full'}
    ])
  ]
})
export class SecurityModule { }
