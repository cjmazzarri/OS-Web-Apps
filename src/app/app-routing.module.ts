import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {DetectAccountComponent} from './detect-account/detect-account.component';
import {ReturnPasswordComponent} from './return-password/return-password.component';

const routes: Routes = [
  {path: '' , component: LoginFormComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'detect-account' , component: DetectAccountComponent},
  {path: 'return-password' , component: ReturnPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [LoginFormComponent , ForgotPasswordComponent , DetectAccountComponent , ReturnPasswordComponent]
