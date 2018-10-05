import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FixtureService } from './Services/fixture.service';
import { FixtureFormComponent } from './fixture-form/fixture-form.component';
import { SecondaryFixtureService } from './Services/secondary-fixture.service';
import { CompareFixturesPipe } from './compare-fixtures.pipe';
import {matchCompareService} from "./Services/matchCompare.service";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FixtureFormComponent,
    CompareFixturesPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      { path: 'fixture/:id',component: FixtureFormComponent }
    ])
  ],
  providers: [
    FixtureService,
    SecondaryFixtureService,
    matchCompareService,
    CompareFixturesPipe
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
