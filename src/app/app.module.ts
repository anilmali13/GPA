import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes}from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './gpa/header/header.component';
import { FooterComponent } from './gpa/footer/footer.component';
import { SectionComponent } from './gpa/section/section.component';
import { AsideComponent } from './gpa/aside/aside.component';
import { HomeComponent } from './gpa/homecomp/home.component';

const appRoutes:Routes=[
  {path:"header",component:HeaderComponent},
  {path:"footer",component:FooterComponent},
  {path:"aside",component:AsideComponent},
  {path:"section",component:SectionComponent},
  {path:"",redirectTo:"section",pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    AsideComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes,{useHash:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
