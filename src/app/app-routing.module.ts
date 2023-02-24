import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailpageComponent } from './emailpage/emailpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CrudpageComponent } from './crudpage/crudpage.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';

const routes: Routes = [
 
    {path: 'emailpage',component:EmailpageComponent},
    {path: 'homepage', component:HomepageComponent},
    {path: 'crudpage', component:CrudpageComponent},
    {path: 'aboutpage', component:AboutpageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
