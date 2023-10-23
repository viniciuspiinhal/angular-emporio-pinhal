import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  nome: string | null = localStorage.getItem("nomeUsuario");

  ngOnInit(): void {
    
  }

}
