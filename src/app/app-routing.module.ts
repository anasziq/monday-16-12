import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './public/register/register.module#RegisterPageModule' },

  
 {
   path: 'members',
   loadChildren: './members/member-routing.module#MemberRoutingModule'
 },
 
  { path: 'tab1', loadChildren: './public/tabsfolder/tab1/tab1.module#Tab1PageModule' },
  { path: 'tab2', loadChildren: './public/tabsfolder/tab2/tab2.module#Tab2PageModule' },
  { path: 'tab3', loadChildren: './public/tabsfolder/tab3/tab3.module#Tab3PageModule' },
  { path: 'tabs', loadChildren: './public/tabsfolder/tabs/tabs.module#TabsPageModule' },
  { path: 'profile-details', loadChildren: './public/profile-details/profile-details.module#ProfileDetailsPageModule' },
  { path: 'more-info', loadChildren: './public/more-info/more-info.module#MoreInfoPageModule' },
  { path: 'profile-edit', loadChildren: './public/profile-edit/profile-edit.module#ProfileEditPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)//, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
