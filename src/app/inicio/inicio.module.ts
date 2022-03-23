import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './inicio.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [InicioComponent, LoginComponent],
  imports: [CommonModule, InicioRoutingModule, FormsModule],
  exports: [InicioComponent],
})
export class InicioModule {}
