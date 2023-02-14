import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "users",
    loadComponent: () => import("./user/users.component").then((c) => c.UsersComponent),
  },
  {
    path: "admin",
    loadComponent: () => import("./admin/admin.component").then((c) => c.AdminComponent),
  },
  {
    path: "",
    redirectTo: "/users",
    pathMatch: "full",
  },
  {
    path: '**',
    redirectTo: '/users'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
