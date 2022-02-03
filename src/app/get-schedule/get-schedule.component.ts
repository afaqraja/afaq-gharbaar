import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-schedule',
  templateUrl: './get-schedule.component.html',
  styleUrls: ['./get-schedule.component.scss']
})
export class GetScheduleComponent implements OnInit {
  @Input() isMobile:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
