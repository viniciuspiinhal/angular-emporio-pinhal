import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.renderizarProdutos()
  }

  renderizarProdutos() {
    let secaoProdutos:any = document.getElementById("secao_produtos")

    let listaProdutos = [
        {
            nome: "Recarga Refil Co2",
            imagem: "/assets/img/T1 1.png",
            descricao: "Para a recarga é necessário que você já tenha o seu refil original SodaStream.",
            preco: 159.90
        },
        {
            nome: "Máquina modelo 1",
            imagem: "/assets/img/T1 1.png",
            descricao: "Essa máquina possui bla bla",
            preco: 229.90
        },
        {
            nome: "Headset Gamer RGB",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse headset possui microfone integrado de ótima qualidade",
            preco: 199.90
        },
        {
            nome: "Mousepad Gamer RGB",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mousepad é do tipo Speed e possui RGB nas laterais",
            preco: 129.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        },
        {
            nome: "Mouse Gamer",
            imagem: "/assets/img/T1 1.png",
            descricao: "Esse mouse tem 10000 dpi, e controle de DPI",
            preco: 159.90
        }
    ]

    // Template Strings, usa crase como separador = ``
    let template = ""

    for(let index = 0; index < listaProdutos.length; index++) {
        template = template + `
        <div class="card">
            <img src="${ listaProdutos[index].imagem }" alt="">
            <h3>${ listaProdutos[index].nome }</h3>
            <p>${ listaProdutos[index].descricao }</p>
            <p>R$${ listaProdutos[index].preco }</p>
            <a href="#">Comprar</a>
        </div>
        `
    }

    secaoProdutos.innerHTML = template
}



}

