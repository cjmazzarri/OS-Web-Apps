import {NgModule} from '@angular/core';
import {Routes , RouterModule} from '@angular/router';
import {LoginFormComponent} from './login-form/login-form.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {DetectAccountComponent} from './detect-account/detect-account.component';
import {ReturnPasswordComponent} from './return-password/return-password.component';
import {ShowCourseStatisticComponent} from './show-course-statistic/show-course-statistic.component';
import {FiltersComponent} from './filters/filters.component';
import {CourseTableComponent} from './course-table/course-table.component';
import {CourseSelectComponent} from './course-select/course-select.component';
import {HeaderComponent} from './header/header.component';
import {NoVacantComponent} from './no-vacant/no-vacant.component';
import {RequestDetailComponent} from './request-detail/request-detail.component';
import {RequestsComponent} from './requests/requests.component';
import {RequestsNotFoundComponent} from './requests-not-found/requests-not-found.component';
import {RequestsTableComponent} from './requests-table/requests-table.component';
import {SaveScheduleComponent} from './save-schedule/save-schedule.component';
import {SaveScheduleSuccesComponent} from './save-schedule-success/save-schedule-success.component';
import {ShowPeriodStatisticComponent} from './show-period-statistic/show-period-statistic.component';
import {ShowScheduleComponent} from './show-schedule/show-schedule.component';
import {InscriptionProcessComponent} from './inscription-process/inscription-process.component';


const routes: Routes = [
  {path: '' , component: LoginFormComponent},
  {path: 'forgot-password' , component: ForgotPasswordComponent},
  {path: 'detect-account' , component: DetectAccountComponent},
  {path: 'return-password' , component: ReturnPasswordComponent},
  {path: 'show-course-statistic' , component: ShowCourseStatisticComponent},
  {path: 'filter' , component: FiltersComponent},
  {path : 'course-table' , component: CourseTableComponent},
  {path: 'course-select' , component: CourseSelectComponent},
  {path: 'header' , component: HeaderComponent},
  {path: 'no-vacant' , component: NoVacantComponent},
  {path: 'request-details', component: RequestDetailComponent},
  {path: 'request' , component: RequestsComponent},
  {path: 'request-not found' , component: RequestsNotFoundComponent},
  {path: 'request-table' , component: RequestsTableComponent },
  {path: 'save-schedule' , component: SaveScheduleComponent},
  {path: 'save-schedule-success' , component: SaveScheduleSuccesComponent},
  {path: 'show-course-statistic' , component: ShowCourseStatisticComponent},
  {path: 'show-period-statistic' , component: ShowPeriodStatisticComponent},
  {path: 'show-schedule' , component: ShowScheduleComponent},
  {path: 'show-section-statistic' , component: ShowScheduleComponent},
  {path: 'inscription-process' , component: InscriptionProcessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
// tslint:disable-next-line:max-line-length
export const routingComponents = [LoginFormComponent , ForgotPasswordComponent , DetectAccountComponent , ReturnPasswordComponent, ShowCourseStatisticComponent , FiltersComponent , CourseTableComponent , CourseSelectComponent , HeaderComponent , NoVacantComponent , RequestDetailComponent , RequestsComponent , RequestsNotFoundComponent , RequestsTableComponent , SaveScheduleComponent  , ShowCourseStatisticComponent , SaveScheduleSuccesComponent , ShowPeriodStatisticComponent , ShowScheduleComponent , ShowScheduleComponent , InscriptionProcessComponent];
