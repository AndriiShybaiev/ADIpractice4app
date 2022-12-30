import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MatriculaCreateComponent } from './matriculas/matricula-create/matricula-create.component';
import { MatriculaUpdateComponent } from './matriculas/matricula-update/matricula-update.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent},
  {path: 'matriculas', component: MatriculasComponent},
  {path: 'matriculas/new', component: MatriculaCreateComponent},
  {path: 'matriculas/:matriculaId', component: MatriculaUpdateComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
