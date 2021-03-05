import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger'; 

//Internal module
import {FeedbackModuleModule} from './feedback-module/feedback-module.module'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './component/my-component/my-component.component';
import { LoginComponent } from './component/login/login.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookFlightComponent } from './component/book-flight/book-flight.component';
import { FlightDetailComponent } from './component/flight-detail/flight-detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ViewDetailComponent } from './component/view-detail/view-detail.component';
import { ViewBookingComponent } from './component/view-booking/view-booking.component';
import { TestPipePipe } from './test-pipe.pipe';
import { HeightlightDirective } from './heightlight.directive';
import { ContactusComponent } from './component/contactus/contactus.component';
import { NormalOrderComponent } from './normal-order/normal-order.component';
import { PremiumOrderComponent } from './premium-order/premium-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './component/logout/logout.component';
import { PrimeChartComponent } from './prime-chart/prime-chart.component';
import {ChartModule} from 'primeng/chart';



@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    BookFlightComponent,
    FlightDetailComponent,
    ProfileComponent,
    ViewDetailComponent,
    ViewBookingComponent,
    TestPipePipe,
    HeightlightDirective,
    ContactusComponent,
    NormalOrderComponent,
    PremiumOrderComponent,
    LogoutComponent,
    PrimeChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FeedbackModuleModule,
    ReactiveFormsModule,
    ChartModule,
    LoggerModule.forRoot({serverLoggingUrl: '/users/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
