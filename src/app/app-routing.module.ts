import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPageComponentComponent } from './no-page-component/no-page-component.component';
import { POSTAPIreactiveFormComponent } from './postapireactive-form/postapireactive-form.component';
import { ReactiveFormPostAPIComponent } from './reactive-form-post-api/reactive-form-post-api.component';
import { UserDataTableComponent } from './user-data-table/user-data-table.component';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';
import { UserTemplateFormComponent } from './user-template-form/user-template-form.component';
//importing the components 



const routes: Routes = [{
  path:'ReactiveFormWithValidation',
  component: UserReactiveFormComponent
},
{
  path:'UserDataTable',
  component: UserDataTableComponent
},
{
  path:'TemplateForm',
  component: UserTemplateFormComponent
},
{
  path:'APIReactiveForm',
  component: ReactiveFormPostAPIComponent
},
{
  path:'PostApiReactive',
  component: POSTAPIreactiveFormComponent
}
// {
//   path:'**',
//   component: NoPageComponentComponent
// }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
