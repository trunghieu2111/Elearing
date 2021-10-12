import { Component, OnInit } from '@angular/core';
import { NzTimelineMode } from 'ng-zorro-antd/timeline';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  mode: NzTimelineMode = 'alternate';
  khanh = 'khanh';
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
