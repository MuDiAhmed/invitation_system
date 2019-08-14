import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import {LoginRoutingModule} from "./login-routing.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [CommonModule, RouterModule, LoginRoutingModule,  ReactiveFormsModule],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})

export class LoginModule { }
