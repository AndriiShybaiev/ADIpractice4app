import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard.guard';
import { ContratoCreateComponent } from './contratos/contrato-create/contrato-create.component';
import { ContratoUpdateComponent } from './contratos/contrato-update/contrato-update.component';
import { ContratosComponent } from './contratos/contratos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MatriculaCreateComponent } from './matriculas/matricula-create/matricula-create.component';
import { MatriculaUpdateComponent } from './matriculas/matricula-update/matricula-update.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UsuarioCreateComponent } from './usuarios/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './usuarios/usuario-update/usuario-update.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent, canActivate:[AuthGuardGuard]},
  {path: 'usuarios/new', component: UsuarioCreateComponent},
  {path: 'usuarios/:usuarioId', component: UsuarioUpdateComponent, canActivate:[AuthGuardGuard]},
  {path: 'matriculas', component: MatriculasComponent},
  {path: 'matriculas/new', component: MatriculaCreateComponent, canActivate:[AuthGuardGuard]},
  {path: 'matriculas/:matriculaId', component: MatriculaUpdateComponent, canActivate:[AuthGuardGuard]},
  {path: 'contratos', component: ContratosComponent, canActivate:[AuthGuardGuard]},
  {path: 'contratos/new', component: ContratoCreateComponent, canActivate:[AuthGuardGuard]},
  {path: 'contratos/:contratoId', component: ContratoUpdateComponent, canActivate:[AuthGuardGuard]},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent},
  {path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
