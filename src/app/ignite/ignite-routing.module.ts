import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IgniteComponent } from './ignite.component';

const routes: Routes = [
  {
    path: '',
    component: IgniteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IgniteRoutingModule { }
