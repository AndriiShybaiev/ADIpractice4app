import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../usuarios/usuarios.service';

@Component({
  selector: 'p4-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  message: string ='';
  result: any;

  constructor(private usuariosServise: UsuariosService) { }

  ngOnInit(): void {
  }

  doLogin() {
    // if (this.email==="admin@gmail.com" && this.password==="password") {
    //   alert("Login Successful");
    // }
    //this.usuariosServise.login(this.email, this.password).subscribe((response: Response) => this.result = response.text());
    //this.message = this.result;
    this.usuariosServise.login(this.email, this.password)
  }

}
