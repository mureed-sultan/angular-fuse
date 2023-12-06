import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Pages/Auth/signin/signin.component';
import { ProjectComponent } from './Pages/Dashboard/project/project.component';
import { DesignationComponent } from './Pages/designation/designation.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'designation', component: DesignationComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
