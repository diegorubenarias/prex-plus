import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CinemaRoutingModule } from './cinema-routing.module';
import { LoginPage } from './pages/login/login.page';



@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CinemaRoutingModule
  ],
})
export class CinemaModule { }

