import 'hammerjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule, OVERLAY_PROVIDERS } from '@angular/material';
import { NgModule } from '@angular/core';
import { AngularFireModule, AuthMethods,  AuthProviders } from "angularfire2";
import { TextareaResizeModule } from '@neoprospecta/angular-textarea-resize';

import { AppComponent } from './app.component';

// Global Modules
import { HomeModule } from './home';
import { AppRoutingModule } from './app-routing.module';
import { MainDialogModule } from './shared/services/main-dialog';
import { UploadModule } from './upload/upload.module';

// Global Services
import { AuthService } from './auth/shared/auth.service';
import { DatabaseService } from './shared/services/database/database.service';
import { JsonStorageService } from './json-storage/json-storage.service';
import { ProfileService } from './profile/profile.service';
//Global Components
import { PostSharedModule } from './post/shared/post-shared.module';

// App environment conf
import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig,{
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HomeModule,
    HttpModule,
    MainDialogModule,
    MaterialModule.forRoot(),
    TextareaResizeModule,
    UploadModule,
    PostSharedModule,
  ],
  providers: [
    OVERLAY_PROVIDERS,
    AuthService,
    JsonStorageService,
    ProfileService,
    DatabaseService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
