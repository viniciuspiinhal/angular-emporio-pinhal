import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login.service';
import {HomeComponent} from 'src/app/views/home/home.component'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  userModel = new User ();

  mensagem ="";

  receberDados(){
    const blackList: string [] = ["select ","or ", "from ", "drop ", "having ", "group ", "by ","insert ", "exec ","\"", "'", ";", "--", "#", "*",]

    blackList.forEach(cadaPalavra => {
      if (this.userModel.email?.toLowerCase().includes(cadaPalavra)) {
        this.mensagem = "Dados Incorretos";

        return;

      }
    })

    this.loginService.login(this.userModel).subscribe({
      next: (response) => {
        console.log (response.body.user.firstname)
        localStorage.setItem("nomeUsuario", response.body.user.firstname)
        this.router.navigateByUrl("/")
      }, error: (msgErro) => {
        console.log(msgErro.error);
        this.mensagem = msgErro.error;
        // alert(msgErro.error);

        if (msgErro.error == "Password is too short") {
          this.mensagem = "A senha é muito curta";
        } else {
          this.mensagem = msgErro.error;
        }

      }
    })
  }
}
