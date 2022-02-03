import { AotSummaryResolver } from '@angular/compiler';
import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GharBaar.com';
  isMobile : boolean = false;
  

  constructor(){
    this.checkMobile();
    console.log(this.isMobile)
  }
  ngOnInit(): void {
    setTimeout(() => {
      AOS.init();
     }, 2000);
  
  }
  @HostListener('window:resize', ['$event'])
  onEvent() {
    this.checkMobile();
  }

  checkMobile() {
    const windowWidth =
      window.screen.width < window.outerWidth
        ? window.screen.width
        : window.outerWidth;
    if (windowWidth > 480) {
      this.isMobile = false;
    } else {
      this.isMobile = true;
    }
  }










}
