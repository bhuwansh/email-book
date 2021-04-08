import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailListComponent } from './components/email-list/email-list.component';
import { CoverpageComponent } from './components/coverpage/coverpage.component';
import { AddComponyComponent } from './components/add-compony/add-compony.component';


const routes: Routes = [
  {path:'' , component:CoverpageComponent},
  {path:'homepage' , component:EmailListComponent},
  {path:'company',component:AddComponyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
