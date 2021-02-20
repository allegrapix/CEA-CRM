import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LogoComponent } from './components/logo/logo.component';
import { LogoLoginComponent } from './components/logo-login/logo-login.component';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';

@NgModule({
  declarations: [LogoComponent, LogoLoginComponent, ValidationMessageComponent],
  imports: [CommonModule],
  exports: [LogoComponent, LogoLoginComponent, ValidationMessageComponent],
})
export class SharedModule {}
