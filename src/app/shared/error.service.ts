import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  constructor() {}
  loginErrors(error: any) {
    if (error.status === 0) {
      return 'Serveur ne réponds pas';
    } else if (error.status === 404) {
      return 'Votre Email ou mot de passe est invalide';
    }
  }
}
