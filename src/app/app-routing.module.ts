import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Pages/Auth/signin/signin.component';
import { ProjectComponent } from './Pages/Dashboard/project/project.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'project', component: ProjectComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
