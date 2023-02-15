import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule,Route } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';


const routes: Route[] = [
  {path: '', component: HomeComponent },
  {path: 'about', component: AboutComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'work', component: WorkComponent },
  {path: 'education', component: EducationComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactComponent,
    WorkComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
