import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'matriculas', component: MatriculasComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
