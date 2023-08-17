import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './Container/container.component';
import { rangeComponent } from './Range/range.component';
import { ResultComponent } from './Result/result.component';

const routes: Routes = [
  {
    path: "container",
    component: ContainerComponent,
  },
  {
    path: "range",
    component: rangeComponent,
  },
  {
    path: "result",
    component: ResultComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
