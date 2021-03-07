import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

const config = {
  apiKey: "AIzaSyBKMqGKgF7O4btPubf5q1gDzWML1FnME6Q",
  authDomain: "stuwork-trial.firebaseapp.com",
  projectId: "stuwork-trial",
  storageBucket: "stuwork-trial.appspot.com",
  messagingSenderId: "921404920677",
  appId: "1:921404920677:web:84cdce278c3377acb0078c"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
