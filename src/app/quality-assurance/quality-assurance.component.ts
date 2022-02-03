import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quality-assurance',
  templateUrl: './quality-assurance.component.html',
  styleUrls: ['./quality-assurance.component.scss']
})
export class QualityAssuranceComponent implements OnInit {
  @Input() isMobile:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
