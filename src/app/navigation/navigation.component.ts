import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'p4-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private usuariosService: UsuariosService) {}

    loggedIn() {
      return this.usuariosService.isLoggedIn()
    }

    logout() {
      this.usuariosService.logout()
    }

}
