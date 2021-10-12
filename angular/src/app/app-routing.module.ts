import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './layout/page-layout/page-layout.component';

const routes: Routes = [
  {
    path: '',
    component: PageLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'crud',
        loadChildren: () => import('./pages/crud/crud.module').then((m) => m.CrudModule)
      },
      {
        path: 'custom',
        loadChildren: () => import('./pages/custom/custom.module').then((m) => m.CustomModule)
      },
      {
        path: 'features',
        loadChildren: () => import('./pages/features/features.module').then((m) => m.FeaturesModule)
      }
    ]
    // pathMatch: 'full',
    // loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  { path: 'home-page', loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'custom', loadChildren: () => import('./pages/custom/custom.module').then(m => m.CustomModule) },
  { path: 'crud', loadChildren: () => import('./pages/crud/crud.module').then(m => m.CrudModule) },
  { path: 'features', loadChildren: () => import('./pages/features/features.module').then(m => m.FeaturesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
