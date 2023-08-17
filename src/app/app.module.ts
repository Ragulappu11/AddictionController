import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedDataService } from './shared-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { rangeComponent } from './Range/range.component';
import { ContainerComponent } from './Container/container.component';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from './Result/result.component';

const routes: Routes = [
  { path: 'container', component : ContainerComponent},
  {path: 'range', component: rangeComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    rangeComponent,
    ResultComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
