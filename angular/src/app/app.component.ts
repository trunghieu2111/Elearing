import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
        <abp-loader-bar></abp-loader-bar>
<!--    <app-page-layout></app-page-layout>-->
    <router-outlet></router-outlet>

<!--    <abp-dynamic-layout></abp-dynamic-layout>-->
  `,
})
export class AppComponent {}
