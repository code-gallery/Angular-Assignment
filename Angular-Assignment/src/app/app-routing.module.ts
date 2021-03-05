import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BookFlightComponent } from './component/book-flight/book-flight.component';
import { ViewBookingComponent } from './component/view-booking/view-booking.component';
import { ViewDetailComponent } from './component/view-detail/view-detail.component';
import { FlightDetailComponent } from './component/flight-detail/flight-detail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { ContactusComponent } from './component/contactus/contactus.component';
import { NormalOrderComponent } from './normal-order/normal-order.component';
import { PremiumOrderComponent } from './premium-order/premium-order.component';
import { LogoutComponent } from './component/logout/logout.component';
import { PrimeChartComponent } from './prime-chart/prime-chart.component';

const routes: Routes = [
{path: '', redirectTo: 'login', pathMatch: 'full'},
{path: 'login', component:LoginComponent},
// {path: 'dashboard', component:DashboardComponent,
// children: [
//   { path: '', redirectTo: 'normalOrder', pathMatch: 'full' },
//   { path: 'normalOrder', component:   NormalOrderComponent},
//   { path: 'premiumOrder', component:  PremiumOrderComponent},
// ]},
{path: 'dashboard', component:DashboardComponent},
{path: 'book-flight', component:BookFlightComponent},
{path: 'view-bookings', component:ViewBookingComponent},
{path: 'booking-detail', component:ViewDetailComponent,},
{path: 'flight-detail', component:FlightDetailComponent},
{path: 'profile-detail', component:ProfileComponent},
{path: 'contact-us', component:ContactusComponent},
{path: 'feedback', loadChildren: () => import('./feedback-module/feedback-module.module').then(m => m.FeedbackModuleModule)}​​​​​,
{path: 'logout', component:LogoutComponent},
{path: 'booking-detail/:id', component:ViewDetailComponent,},
{path: 'primechart', component:PrimeChartComponent,},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
