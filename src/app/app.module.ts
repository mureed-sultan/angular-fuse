import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './Pages/Auth/signin/signin.component';
import { ForgetPasswordComponent } from './Pages/Auth/forget-password/forget-password.component';
import { SignupComponent } from './Pages/Auth/signup/signup.component';
import { AlertComponent } from './Component/alert/alert.component';


import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Pages/Dashboard/home/home.component';
import { HeaderComponent } from './Component/header/header.component';
import { NavigationComponent } from './Component/navigation/navigation.component';
import { ProjectComponent } from './Pages/Dashboard/project/project.component';
import { EmployeeInformationComponent } from './Component/employee-information/employee-information.component';
import { FormsModule } from '@angular/forms';
import { DesignationComponent } from './Pages/designation/designation.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ForgetPasswordComponent,
    SignupComponent,
    AlertComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    ProjectComponent,
    EmployeeInformationComponent,
    DesignationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
