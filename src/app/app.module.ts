import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { HighlightDirective } from './attrdir/highlight.directive';
import { AttrComponent } from './attrdir/attr.component';
import { StrdirComponent } from './strdir/strdir.component';
import { MyNgIfDirective } from './strdir/my-ng-if.component';
import {ParentComponent} from './prov/parent.component'
import { ChildComponent } from './prov/child.component';
import { SimpleService } from './prov/simple.service';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,


    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    HighlightDirective,
    MyNgIfDirective,
    AttrComponent,
    StrdirComponent,
    ParentComponent,
    ChildComponent
  ],
  
  //AttrComponent , StrdirComponent
  bootstrap: [ AppComponent,AttrComponent,StrdirComponent,ParentComponent],
  providers: [ SimpleService ]
})
export class AppModule { }
