import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4TabPageRoutingModule } from './tab4-tab-routing.module';

import { Tab4TabPage } from './tab4-tab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab4TabPageRoutingModule
  ],
  declarations: [Tab4TabPage]
})
export class Tab4TabPageModule {}
