import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MatriculasComponent } from './matriculas/matriculas.component';
import { HttpClientModule } from '@angular/common/http';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MatriculaUpdateComponent } from './matriculas/matricula-update/matricula-update.component';
import { MatriculaCreateComponent } from './matriculas/matricula-create/matricula-create.component';
import { ContratosComponent } from './contratos/contratos.component';
import { UsuarioCreateComponent } from './usuarios/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './usuarios/usuario-update/usuario-update.component';
import { ContratoCreateComponent } from './contratos/contrato-create/contrato-create.component';
import { ContratoUpdateComponent } from './contratos/contrato-update/contrato-update.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    MatriculasComponent,
    UsuariosComponent,
    NavigationComponent,
    NotfoundComponent,
    LoginComponent,
    MatriculaUpdateComponent,
    MatriculaCreateComponent,
    ContratosComponent,
    UsuarioCreateComponent,
    UsuarioUpdateComponent,
    ContratoCreateComponent,
    ContratoUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
