import { Component } from '@angular/core';
import { Post } from './model/post.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

constructor() {
    const config = {
      apiKey: "AIzaSyApHNF0UWTHlEJWaBJHIwQVMhVS65c1tAA",
      authDomain: "activite-post.firebaseapp.com",
      databaseURL: "https://activite-post.firebaseio.com",
      projectId: "activite-post",
      storageBucket: "",
      messagingSenderId: "811613803223"
    };
    firebase.initializeApp(config);
}

}

