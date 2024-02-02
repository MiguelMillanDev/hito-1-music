import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab4TabPage } from './tab4-tab.page';

const routes: Routes = [
  {
    path: '',
    component: Tab4TabPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab4TabPageRoutingModule {}
