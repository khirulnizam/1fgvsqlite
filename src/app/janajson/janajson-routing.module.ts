import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JanajsonPage } from './janajson.page';

const routes: Routes = [
  {
    path: '',
    component: JanajsonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JanajsonPageRoutingModule {}
