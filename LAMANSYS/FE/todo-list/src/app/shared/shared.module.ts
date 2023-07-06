import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnIconComponent } from './btn-icon/btn-icon.component';
import { BtnTextComponent } from './btn-text/btn-text.component';
import { BtnIconTextComponent } from './btn-icon-text/btn-icon-text.component';

@NgModule({
  declarations: [
    BtnIconComponent,
    BtnTextComponent,
    BtnIconTextComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BtnIconComponent,
    BtnTextComponent,
    BtnIconTextComponent,
  ]
})
export class SharedModule { }
