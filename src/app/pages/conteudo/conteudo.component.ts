import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dadosTemp } from '../../data/dadosTemp'
@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {
  @Input() imagem:string =''
  @Input() titulo:string=''
  @Input() conteudo:string=''
  private id:string | null='0'
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>
      this.id =value.get("id")
    )
    this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id:string | null){
    const result = dadosTemp.filter(
      article => article.id.toString() == id)[0]
      this.imagem = result.foto
      this.titulo = result.titulo
      this.conteudo = result.conteudo

  }

}
