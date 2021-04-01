import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProjectClassIComponent } from './project-class-i/project-class-i.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbdSortableHeader} from './project-class-i/sortable.directive';
import {DecimalPipe} from '@angular/common';
import { ProjectClassIiComponent } from './project-class-ii/project-class-ii.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectClassIComponent,
    HomeComponent,
    NgbdSortableHeader,
    ProjectClassIiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
