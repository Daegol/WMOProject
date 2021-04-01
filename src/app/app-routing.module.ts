import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectClassIComponent} from './project-class-i/project-class-i.component';
import {HomeComponent} from './home/home.component';
import {ProjectClassIiComponent} from './project-class-ii/project-class-ii.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
  path: 'classI',
    component: ProjectClassIComponent
  }, {
    path: 'classII',
    component: ProjectClassIiComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
