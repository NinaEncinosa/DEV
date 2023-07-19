import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreHeaderComponent } from './core-header/core-header.component';
import { CoreContentComponent } from './core-content/core-content.component';
import { FeatureModule } from '../feature/feature.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CoreHeaderComponent,
    CoreContentComponent
  ],
  imports: [
    CommonModule,
    FeatureModule,
    SharedModule
  ],
  exports: [
    CoreHeaderComponent,
    CoreContentComponent,
  ]
})
export class CoreModule { }
