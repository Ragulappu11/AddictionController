import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './Container/container.component';
import { rangeComponent } from './Range/range.component';
import { ApiService } from './api.service';

const routes: Routes = [
  {
    path: "container",
    component: ContainerComponent,
  },
  {
    path: "range",
    component: rangeComponent,
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
