import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'; // Interfaz CanActivate para protección de rutas
import { AutenticacionService } from '../servicios/autenticacion.service';

@Injectable()
export class GuardService implements CanActivate {

  constructor(private autenticacionService: AutenticacionService) { }

  // En el método canActivate establecemos los parámetros route y state y llamamos al método
  // isAuthenticated de nuestro servicio de autenticación para saber si está iniciada la sesión.
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.autenticacionService.isAuthenticated();
  }

}
