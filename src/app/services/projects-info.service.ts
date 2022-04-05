import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsInfoService {

  projects = [
    {
      id: '001',
      name: 'Entertainment',
      image: 'entertainment.jpg',
      description: "Meu primeiro projeto feito com Angular. Este é um app web que exibe filmes e suas informações principais. O usuario pode buscar por filmes e adiciona-los em 'favoritos' ou em 'ver depois' (as informações são salvas em localStorage). Para essa aplicação utilizei duas API's: TMDB (https://www.themoviedb.org/?language=pt-BR) e OMDB (https://omdbapi.com/).",
      linkRepositorio: 'https://github.com/stanescon/entertainment-web-app',
      linkPage: 'https://entertainment-web-app.herokuapp.com/main'
    },
    {
      id: '003',
      name: 'Invoices',
      image: 'invoices.jpg',
      description: 'Projeto feito em equipe, com objetivo de criar um app de registro de faturas e salvando os dados dos usuarios por login. A proposta do aplicativo é registrar faturas com nomes, valores, datas de vencimento e marca-las como pagas ou pendentes. Fizemos uma tela de login/cadastro pra cadastrar as faturas por usuário. O projeto ainda está em fase de aperfeiçoamento, pretendemos melhorar e acrescentar algumas funcionalidades com o tempo, mas a parte principal web já está pronta pra uso. Convido a quem quiser fazer um cadastro e testar o aplicativo.',
      linkRepositorio: 'https://github.com/stanescon/invoices-app',
      linkPage: 'https://stanescon.github.io/invoices-app/'
    },
    {
      id: '004',
      name: 'Rest Countries',
      image: 'rest-countries.jpg',
      description: 'Mais um projeto feito a partir dos desafios do site https://www.frontendmentor.io. Esse projeto foi escolhido para aperfeiçoar minhas habilidades de utilizar API e JavaScript.',
      linkRepositorio: 'https://github.com/stanescon/challenge-REST-countries',
      linkPage: 'https://stanescon.github.io/challenge-REST-countries/'
    },
    {
      id: '002',
      name: 'Alura-challeng',
      image: 'alura-challenge.jpg',
      description: 'Alura Challenge Front-End (3ª Edição): Criando uma loja virtual / (Passando o projeto pra Angular)',
      linkRepositorio: 'https://github.com/stanescon/Alura-challenge',
      linkPage: ''
    },
    {
      id: '005',
      name: 'Time Tracking',
      image: 'time-tracking.jpg',
      description: 'Esse projeto foi um dos primeiros projetos que fiz utilizando HTML, CSS e um pouco de JavaScript. O desafio era criar uma pagina com o design o mais proximo possivel do proposto, com algumas interações entre os horarios diarios, semanais e mensais. Porém os horários exibidos eram de exemplos pré-definidos. Após realizar outros projetos e me aprofundar mais em JavaScript resolvi voltar nesse projeto pra implementar a funcionalidade que o app propõe. Permitindo que o usuario cadastre seus horários, e modifique-os de acordo com o necessário e salvando os dados em localStorage.',
      linkRepositorio: 'https://github.com/stanescon/challenge-time-tracking',
      linkPage: 'https://stanescon.github.io/challenge-time-tracking/'
    },
    {
      id: '006',
      name: 'Quizzes',
      image: 'quizzes.jpg',
      description: "Esse projeto foi feito em Angular 13 para um processo seletivo de dev front-end. Se trata de um CRUD de quizzes e foi utilizado uma API oferecida pela empresa responsavel pelo processo seletivo. Para testar faça o login com o email 'profdev@tindin.com.br' e a senha '123'.",
      linkRepositorio: 'https://github.com/stanescon/teste-quizzes',
      linkPage: 'https://teste-quizzes.herokuapp.com/'
    }
  ]

  constructor() { }
}
