import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'anatomical-figure';
  firebaseConfig = {
    apiKey: "AIzaSyDio1WkWsHRVB3TtESPVtCC0uqtjd3zrUA",
    authDomain: "anatomical-figure.firebaseapp.com",
    projectId: "anatomical-figure",
    storageBucket: "anatomical-figure.appspot.com",
    messagingSenderId: "758330670773",
    appId: "1:758330670773:web:1c010543a3da0385e888fc"
  };

  constructor() {
    initializeApp(this.firebaseConfig);
  }
}
