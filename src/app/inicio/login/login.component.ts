import { Router } from '@angular/router';
import { AutenticacaoService } from './../../autenticacao/autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';
  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    this.autenticacaoService.autenticar(this.usuario, this.senha).subscribe(
      () => {
        this.router.navigate(['jogos']);
      },
      (error) => {
        alert('Not Logged in :(');
        console.log(error);
      }
    );
  }
}
