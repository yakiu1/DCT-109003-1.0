import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UtilitiesComponent } from './utilities.component';
import { ColorComponent } from './color/color.component';

const routes: Routes = [{ path: '', component: UtilitiesComponent },
                        { path: 'color', component: ColorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilitiesRoutingModule { }
