import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Añadimos las claves del servicio de firebase para que se establezca la inicialización del servicio.
export class AppComponent implements OnInit {
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAQSlAbupQYbUPkazfV6iDmRFyyvWuj4GU',
      authDomain: 'comprasapp-90e07.firebaseapp.com'
    });
  }
}


