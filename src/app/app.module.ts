import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from 'src/enviroments/environment';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { MainComponent } from './main/main.component';
// import { CategoriesComponent } from './pages/categories/categories.component';
// import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
// import { AlertComponent } from './components/alert/alert.component';

// import {FirebaseAppModule} from '@angular/fire/app'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    // HeaderComponent,
    // DashboardComponent,
    // MainComponent,
    // CategoriesComponent,
    // PagenotfoundComponent,
    // AlertComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  // declarations: [App, YourToastComponent],
})
export class AppModule { }
