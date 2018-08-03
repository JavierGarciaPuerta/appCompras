import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AutenticacionService {

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { }

  registroUsuario(userdata) {
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password).catch(error => {
      console.log(error);
    }
    );
  }

  inicioSesion(userdata) {
    // m�todo signInWithEmailAndPassword de firebase para enviar los datos de inicio sesi�n.
    firebase.auth().signInWithEmailAndPassword(userdata.email,
      userdata.password)
      .then(response => {
        console.log(response);
        this.router.navigate(['/inicio']);
      })
      .catch(
      error => {
        console.log(error);
      }
      );
  }

  isAuthenticated() {
    const user = firebase.auth().currentUser; // se emplea este m�todo para determinar si el usuario est� conectado.
    if (user) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    firebase.auth().signOut();
  }

}
