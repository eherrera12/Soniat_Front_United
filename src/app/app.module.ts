import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app.routing';
import { AppRoutingModule } from '../app/app-routing.module';
import { ComponentsModule } from './components/components.module';





import { APP_INITIALIZER } from '@angular/core';

import {SoniatComponent} from './components/soniat/soniat.component';
import {MessageComponent} from './components/message/message.component';
import {ApiService} from './services/api.service';

import { ConfigService } from './configuration/config.service';
import { environment } from '../environments/environment';
import { InfiniteScrollModule} from 'ngx-infinite-scroll';



//soleidalogin

//import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
//import { HttpClientModule } from '@angular/common/http';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { interceptorProvider } from './components/interceptors/interceptor.service';



import { AppComponent } from './app.component';

//import { SalirComponent } from './components/salir/salir.component';


//import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AgmCoreModule} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { OpcionuserComponent } from './user-profile/opcionuser/opcionuser.component';





import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,

    BrowserModule,
    InfiniteScrollModule,



  
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    OpcionuserComponent,
    LoginComponent,
    HomeComponent,
    SoniatComponent,
    MessageComponent,
     // SalirComponent,

  ],
  providers: [interceptorProvider,
    ConfigService,
    {
      provide   : APP_INITIALIZER,
      useFactory: ConfigLoader,
      deps      : [ConfigService],
      multi     : true
    },
    ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function ConfigLoader(configService: ConfigService) {
  //Note: this factory need to return a function (that return a promise)
  
    return () => configService.load(environment.baseUrl); 
  }