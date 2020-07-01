import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {DetectAccountComponent} from './detect-account/detect-account.component';

const routes: Routes = [
  {path: 'login' , component: LoginFormComponent},
  {path: 'detected' , component: DetectAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const  routingComponents = [LoginFormComponent , DetectAccountComponent]
