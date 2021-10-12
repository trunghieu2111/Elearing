import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseHeaderComponent } from './base-header/base-header.component';
import { BaseContentComponent } from './base-content/base-content.component';
import { BaseFooterComponent } from './base-footer/base-footer.component';
import { BaseSiderComponent } from './base-sider/base-sider.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { RouterModule } from '@angular/router';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    BaseHeaderComponent,
    BaseContentComponent,
    BaseFooterComponent,
    BaseSiderComponent,
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzBreadCrumbModule,
    RouterModule,
    HomeModule
  ],
  exports: [
    PageLayoutComponent
  ]
})
export class LayoutModule { }
