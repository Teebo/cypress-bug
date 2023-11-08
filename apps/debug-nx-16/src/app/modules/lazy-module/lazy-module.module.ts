import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyModuleRoutingModule } from './lazy-module-routing.module';


@NgModule({
  declarations: [],
  imports: [
    RouterModule,
    CommonModule,
    LazyModuleRoutingModule
  ]
})
export class LazyModuleModule { }
