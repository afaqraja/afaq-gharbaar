import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { ProductsComponent } from './products/products.component';
import { StepsComponent } from './steps/steps.component';
import { SchedulecallComponent } from './schedulecall/schedulecall.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { QualityAssuranceComponent } from './quality-assurance/quality-assurance.component';
import { GetScheduleComponent } from './get-schedule/get-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    ProductsComponent,
    StepsComponent,
    SchedulecallComponent,
    TestimonialsComponent,
    QualityAssuranceComponent,
    GetScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
