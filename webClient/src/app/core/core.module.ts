import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, HeaderComponent, HomeComponent],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, SharedModule],
  exports: [HeaderComponent, LoginComponent],
})
export class CoreModule {}
