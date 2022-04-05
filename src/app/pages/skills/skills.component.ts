import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  languages = {
    html: false,
    css: false,
    angular: false,
    javaScript: false,
    typeScript: false,
    gitHub: false
  }

  titleDescription = ''
  description = 'Clique na linguagem para mostrar informações'

  constructor() { }

  ngOnInit(): void {
  }

  showDetails(language: 'html' | 'css' | 'angular' | 'javaScript' | 'typeScript' | 'gitHub'){

    this.languages.html = false
    this.languages.css = false
    this.languages.angular = false
    this.languages.javaScript = false
    this.languages.typeScript = false
    this.languages.gitHub = false

    this.languages[language] = true

    if(this.languages.html){
      this.titleDescription = 'HTML5'
      this.description = 'HTML (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web.'
    } else if(this.languages.css){
      this.titleDescription = 'CSS3'
      this.description = 'CSS (Cascading Style Sheets ou Folhas de Estilo em Cascata) é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML. O CSS descreve como elementos são mostrados na tela.'
    } else if(this.languages.javaScript){
      this.titleDescription = 'JavaScript'
      this.description = 'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.'
    } else if(this.languages.typeScript){
      this.titleDescription = 'TypeScript'
      this.description = 'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'
    } else if(this.languages.angular){
      this.titleDescription = 'Angular'
      this.description = 'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.'
    } else if(this.languages.gitHub){
      this.titleDescription = 'GitHub'
      this.description = 'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.'
    }
  }

}
