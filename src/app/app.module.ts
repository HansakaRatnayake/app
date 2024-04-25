import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllComponent } from './component/all/all.component';
import { FindComponent } from './component/find/find.component';
import { NewComponent } from './component/new/new.component';
import { UpdateComponent } from './component/update/update.component';
import { DeleteComponent } from './component/delete/delete.component';
import {MatButtonModule} from '@angular/material/button';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatIconModule} from '@angular/material/icon';
import { LoadingComponent } from './component/loading/loading.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HttpManagerInterceptor } from './interceptor/http-manager.interceptor';
import {AngularFireModule } from '@angular/fire/compat';
import {AngularFireStorageModule } from '@angular/fire/compat/storage';
import { environment } from 'src/environment/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FirebaseAppModule } from '@angular/fire/app';


@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    FindComponent,
    NewComponent,
    UpdateComponent,
    DeleteComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
    FirebaseAppModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:HttpManagerInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
