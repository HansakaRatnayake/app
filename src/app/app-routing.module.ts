import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './component/all/all.component';
import { FindComponent } from './component/find/find.component';
import { NewComponent } from './component/new/new.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';

const routes: Routes = [
  {path:'',redirectTo:'/all',pathMatch:'full'},
  {path:'all',component:AllComponent},
  {path:'find',component:FindComponent},
  {path:'new',component:NewComponent},
  {path:'update',component:UpdateComponent},
  {path:'delete',component:DeleteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
