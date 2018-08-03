import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; // Interfaz CanActivate para protecci�n de rutas
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private autenticacionService: AutenticacionService) { }

  // En el m�todo canActivate establecemos los par�metros route y state y llamamos al m�todo
  // isAuthenticated de nuestro servicio de autenticaci�n para saber si est� iniciada la sesi�n.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.autenticacionService.isAuthenticated();
  }

}
