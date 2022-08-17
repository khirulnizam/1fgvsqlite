import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JanajsonPageRoutingModule } from './janajson-routing.module';

import { JanajsonPage } from './janajson.page';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    IonicModule,
    JanajsonPageRoutingModule
  ],
  declarations: [JanajsonPage]
})
export class JanajsonPageModule {}
