import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData } from "@angular/common";
import localeFr from '@angular/common/locales/fr';

import { environment } from './../environments/environment';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MapDashboardComponent } from './map-dashboard/map-dashboard.component';
import { DataDashboardComponent } from './data-dashboard/data-dashboard.component';

registerLocaleData(localeFr, 'fr');

const appRoutes: Routes = [
  {
    path: 'map',
    component: MapDashboardComponent
  },
  {
    path: 'data',
    component: DataDashboardComponent
  },
  {
    path: 'admin',
    component: AdminDashboardComponent
  },
  {
    path: '',
    redirectTo: '/map',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminDashboardComponent,
    MapDashboardComponent,
    DataDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: !environment.production }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
