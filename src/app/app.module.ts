import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { FacultyComponent } from './faculty/faculty.component';
import { LoginComponent } from './login/login.component';
import { HttpProv } from './providers/http.provider';

const appRoutes: Routes = [
  { path:'', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'selection', component: SelectionComponent },
  { path: 'faculty', component: FacultyComponent },
  { path: '**', component: LoginComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent,
    FacultyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HttpProv
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
