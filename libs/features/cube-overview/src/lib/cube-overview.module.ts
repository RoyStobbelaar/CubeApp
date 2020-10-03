import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { CubeOverviewComponent } from './cube-overview.component';

const routes: Route[] = [
  {
    path: '',
    component: CubeOverviewComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [CubeOverviewComponent],
  exports: [CubeOverviewComponent],
})
export class CubeOverviewModule {}
