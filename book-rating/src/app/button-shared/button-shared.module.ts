import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FancyButtonComponent } from './fancy-button/fancy-button.component';

@NgModule({
  declarations: [FancyButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [FancyButtonComponent]
})
export class ButtonSharedModule { }
