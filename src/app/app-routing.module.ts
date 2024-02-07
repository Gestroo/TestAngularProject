import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ThirdComponentComponent } from './components/third-component/third-component.component';

const routes: Routes = [
  {path:'item',component: FirstComponentComponent},
  {path:'item/edit',component: ThirdComponentComponent},
  {path:'**',redirectTo:'/item'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
