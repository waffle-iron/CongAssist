import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
// Clarity
import { ClarityModule } from 'clarity-angular';
// Angular Google Map
import { NguiMapModule} from '@ngui/map';
// Module
import { AppRoutingModule } from 'app/app-routing.module';
// Service
import { AuthService } from 'app/services/auth.service';
import { TerritoryService } from 'app/services/territory.service';
import { UserService } from 'app/services/user.service';
import { ConfigurationService } from 'app/services/configuration.service';
// Pipe
import { KeysPipe } from 'app/pipes/keys.pipe';
import { OrderByPipe } from 'app/pipes/orderby.pipe';
// Component
import { AppComponent } from 'app/app.component';
import { LoginComponent } from 'app/login.component';
import { HeaderComponent } from 'app/header.component';
import { HomeComponent } from 'app/home.component';
import { UsersComponent } from 'app/users.component';
import { HouseListComponent } from 'app/house-list.component';
import { HouseDetailComponent } from 'app/house-detail.component';
import { AssignComponent } from 'app/assign.component';
import { TerritoryComponent } from 'app/territory.component';
import { HouseComponent } from 'app/house.component';
import { SettingComponent } from 'app/setting.component';
import { ConfigurationsComponent } from 'app/configurations.component';

@NgModule({
  declarations: [
    KeysPipe,
    OrderByPipe,
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    HouseListComponent,
    HouseDetailComponent,
    AssignComponent,
    TerritoryComponent,
    HouseComponent,
    SettingComponent,
    ConfigurationsComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFireDatabaseModule,
    ClarityModule.forRoot(),
    NguiMapModule.forRoot({apiUrl: `https://maps.google.com/maps/api/js?key=${environment.googleApi}&libraries=drawing`}),
    AppRoutingModule
  ],
  providers: [ AuthService, TerritoryService, UserService, ConfigurationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
