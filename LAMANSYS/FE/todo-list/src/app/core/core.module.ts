import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHeaderComponent } from './core-header/core-header.component';
import { CoreContentComponent } from './core-content/core-content.component';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CoreHeaderComponent,
    CoreContentComponent
  ],
  imports: [
    CommonModule,
    FeatureModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CoreHeaderComponent,
    CoreContentComponent,
  ]
})
export class CoreModule { }
