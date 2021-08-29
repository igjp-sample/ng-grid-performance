import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IgniteRoutingModule } from './ignite-routing.module';
import { IgniteComponent } from './ignite.component';

import {
	IgxAvatarModule,
	IgxBadgeModule,
	IgxButtonModule,
	IgxGridModule,
	IgxIconModule,
	IgxInputGroupModule,
	IgxProgressBarModule,
	IgxRippleModule,
	IgxSwitchModule
 } from "igniteui-angular";

@NgModule({
  declarations: [
    IgniteComponent
  ],
  imports: [
    CommonModule,
    IgniteRoutingModule,
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
  ]
})
export class IgniteModule { }
